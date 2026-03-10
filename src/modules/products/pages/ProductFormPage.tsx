import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { ProductForm } from "../components/ProductForm";
import { productService } from "../services/productService";
import { defaultRuleSettings } from "../types";
import type { Product } from "../types";
import { toast } from "@/hooks/use-toast";

const emptyProduct: Partial<Product> = {
  code: "",
  barcode: "",
  description: "",
  category: "Outros",
  brand: "",
  unit: "UN",
  status: "active",
  cost: 0,
  price: 0,
  promoPrice: null,
  defaultCommission: 0,
  commercialNotes: "",
  minStock: 0,
  location: "",
  mainSupplier: "",
  controlsLot: false,
  controlsExpiry: false,
  rules: defaultRuleSettings,
};

function validate(data: Partial<Product>): string[] {
  const errors: string[] = [];
  if (!data.code?.trim()) errors.push("Código é obrigatório.");
  if (!data.description?.trim()) errors.push("Descrição é obrigatória.");
  if (!data.category) errors.push("Categoria é obrigatória.");
  if (!data.unit) errors.push("Unidade é obrigatória.");
  if (data.price == null || data.price < 0) errors.push("Preço deve ser >= 0.");
  if (data.cost != null && data.cost < 0) errors.push("Custo deve ser >= 0.");
  if (data.minStock != null && data.minStock < 0) errors.push("Estoque mínimo deve ser >= 0.");
  if (data.defaultCommission != null && data.defaultCommission < 0) errors.push("Comissão deve ser >= 0.");
  return errors;
}

export default function ProductFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;
  const [data, setData] = useState<Partial<Product>>(emptyProduct);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      productService.getById(id!).then((product) => {
        if (product) setData(product);
        setLoading(false);
      });
    }
  }, [id, isNew]);

  const handleSave = async () => {
    const errors = validate(data);
    if (errors.length > 0) {
      toast({ title: "Verifique os campos", description: errors.join(" "), variant: "destructive" });
      return;
    }

    setSaving(true);
    try {
      if (isNew) {
        await productService.create(data as Omit<Product, "id" | "createdAt" | "updatedAt" | "createdBy">);
      } else {
        await productService.update(id!, data);
      }
      toast({ title: isNew ? "Produto criado" : "Produto atualizado", description: data.description || "Salvo com sucesso." });
      navigate("/produtos");
    } catch {
      toast({ title: "Erro ao salvar", description: "Não foi possível salvar o produto.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={isNew ? "Novo produto" : "Editar produto"}
        description="Cadastre e configure as informações do produto."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/produtos")} disabled={saving}>Cancelar</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Salvando…" : "Salvar"}</Button>
          </div>
        }
      />
      <SectionCard>
        <ProductForm data={data} onChange={setData} isNew={isNew} />
      </SectionCard>
    </div>
  );
}
