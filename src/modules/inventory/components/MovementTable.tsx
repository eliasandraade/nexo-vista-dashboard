import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import type { InventoryMovement, InventoryMovementType } from "../types";

const typeVariant: Record<InventoryMovementType, "success" | "danger" | "warning" | "info"> = {
  entry: "success",
  exit: "danger",
  adjustment: "warning",
  transfer: "info",
};

const typeLabel: Record<InventoryMovementType, string> = {
  entry: "Entrada",
  exit: "Saída",
  adjustment: "Ajuste",
  transfer: "Transferência",
};

interface MovementTableProps {
  movements: InventoryMovement[];
}

export function MovementTable({ movements }: MovementTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data/hora</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead className="text-right">Qtd</TableHead>
          <TableHead>Origem</TableHead>
          <TableHead>Destino</TableHead>
          <TableHead>Usuário</TableHead>
          <TableHead>Motivo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {movements.map((m) => (
          <TableRow key={m.id}>
            <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
              {format(new Date(m.date), "dd/MM/yy HH:mm", { locale: ptBR })}
            </TableCell>
            <TableCell className="font-medium text-foreground">{m.productDescription}</TableCell>
            <TableCell>
              <StatusBadge label={typeLabel[m.type]} variant={typeVariant[m.type]} />
            </TableCell>
            <TableCell className="text-right font-medium">
              {m.quantity > 0 ? `+${m.quantity}` : m.quantity}
            </TableCell>
            <TableCell>{m.origin}</TableCell>
            <TableCell>{m.destination}</TableCell>
            <TableCell>{m.user}</TableCell>
            <TableCell className="text-muted-foreground">{m.reason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
