import { useNavigate } from "react-router-dom";
import { Pencil, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import type { Product } from "../types";
import { format } from "date-fns";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Código</TableHead>
          <TableHead>Código de barras</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Unidade</TableHead>
          <TableHead className="text-right">Preço</TableHead>
          <TableHead className="text-right">Est. mín.</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Última atualização</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.code}</TableCell>
            <TableCell className="text-muted-foreground text-xs font-mono">{p.barcode}</TableCell>
            <TableCell>{p.description}</TableCell>
            <TableCell>{p.category}</TableCell>
            <TableCell>{p.unit}</TableCell>
            <TableCell className="text-right">
              {p.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </TableCell>
            <TableCell className="text-right">{p.minStock}</TableCell>
            <TableCell>
              <StatusBadge
                label={p.status === "active" ? "Ativo" : "Inativo"}
                variant={p.status === "active" ? "success" : "neutral"}
              />
            </TableCell>
            <TableCell className="text-muted-foreground text-xs">
              {format(new Date(p.updatedAt), "dd/MM/yyyy HH:mm")}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button variant="ghost" size="icon" onClick={() => navigate(`/produtos/${p.id}`)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => navigate(`/produtos/${p.id}`)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
