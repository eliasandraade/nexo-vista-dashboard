import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Customer } from "../types";

interface CustomerTableProps {
  customers: Customer[];
}

const statusMap: Record<string, { label: string; variant: "success" | "neutral" }> = {
  active: { label: "Ativo", variant: "success" },
  inactive: { label: "Inativo", variant: "neutral" },
};

function formatDate(date: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("pt-BR");
}

export function CustomerTable({ customers }: CustomerTableProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome / Razão social</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Documento</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Última compra</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((c) => {
            const s = statusMap[c.status];
            return (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.personType === "fisica" ? "Física" : "Jurídica"}</TableCell>
                <TableCell className="font-mono text-xs">{c.document}</TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>{c.city}/{c.state}</TableCell>
                <TableCell>{formatDate(c.lastPurchase)}</TableCell>
                <TableCell><StatusBadge label={s.label} variant={s.variant} /></TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/clientes/${c.id}`)}>
                    <Pencil className="h-4 w-4 mr-1" /> Editar
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
