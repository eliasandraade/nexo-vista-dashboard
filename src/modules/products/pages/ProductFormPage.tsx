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

export default function ProductFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;
  const [data, setData] = useState<Partial<Product>>(emptyProduct);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (!isNew) {
      productService.getById(id!).then((product) => {
        if (product) setData(product);
        setLoading(false);
      });
    }
  }, [id, isNew]);

  const handleSave = () => {
    toast({ title: isNew ? "Produto criado" : "Produto atualizado", description: data.description || "Salvo com sucesso." });
    navigate("/produtos");
  };

  if (loading) return null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={isNew ? "Novo produto" : "Editar produto"}
        description="Cadastre e configure as informações do produto."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/produtos")}>Cancelar</Button>
            <Button onClick={handleSave}>Salvar</Button>
          </div>
        }
      />
      <SectionCard>
        <ProductForm data={data} onChange={setData} isNew={isNew} />
      </SectionCard>
    </div>
  );
}
