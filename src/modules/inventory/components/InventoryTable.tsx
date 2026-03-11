import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MoreHorizontal, ArrowRightLeft, Pencil, History } from "lucide-react";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { InventoryItem, InventoryStatus } from "../types";

const statusVariant: Record<InventoryStatus, "success" | "warning" | "danger" | "info"> = {
  normal: "success",
  low: "warning",
  zero: "danger",
  high: "info",
};

const statusLabel: Record<InventoryStatus, string> = {
  normal: "Normal",
  low: "Baixo",
  zero: "Zerado",
  high: "Alto",
};

interface InventoryTableProps {
  items: InventoryItem[];
}

export function InventoryTable({ items }: InventoryTableProps) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Código</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Unidade</TableHead>
          <TableHead className="text-right">Saldo atual</TableHead>
          <TableHead className="text-right">Est. mínimo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Última mov.</TableHead>
          <TableHead className="w-[60px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-foreground">{item.code}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.unit}</TableCell>
            <TableCell className="text-right font-medium">{item.currentStock}</TableCell>
            <TableCell className="text-right">{item.minStock}</TableCell>
            <TableCell>
              <StatusBadge label={statusLabel[item.status]} variant={statusVariant[item.status]} />
            </TableCell>
            <TableCell className="text-muted-foreground text-xs">
              {format(new Date(item.lastMovement), "dd/MM/yy HH:mm", { locale: ptBR })}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate(`/estoque/movimentacoes?productId=${item.productId}`)}>
                    <History className="h-4 w-4 mr-2" /> Ver movimentações
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate(`/estoque/ajustes?productId=${item.productId}`)}>
                    <Pencil className="h-4 w-4 mr-2" /> Ajustar
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate(`/estoque/transferencias?productId=${item.productId}`)}>
                    <ArrowRightLeft className="h-4 w-4 mr-2" /> Transferir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
