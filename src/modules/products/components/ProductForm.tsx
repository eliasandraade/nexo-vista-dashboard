import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product, ProductRuleSettings } from "../types";
import { defaultRuleSettings } from "../types";
import { ProductMainDataSection } from "./ProductMainDataSection";
import { ProductCommercialSection } from "./ProductCommercialSection";
import { ProductInventorySection } from "./ProductInventorySection";
import { ProductRulesSection } from "./ProductRulesSection";
import { ProductSummaryCard } from "./ProductSummaryCard";

interface Props {
  data: Partial<Product>;
  onChange: (data: Partial<Product>) => void;
  isNew?: boolean;
}

export function ProductForm({ data, onChange, isNew }: Props) {
  const handleField = (field: string, value: unknown) => {
    onChange({ ...data, [field]: value });
  };

  const handleRuleChange = (field: keyof ProductRuleSettings, value: unknown) => {
    onChange({
      ...data,
      rules: { ...(data.rules ?? defaultRuleSettings), [field]: value },
    });
  };

  return (
    <Tabs defaultValue="main" className="w-full">
      <TabsList>
        <TabsTrigger value="main">Dados principais</TabsTrigger>
        <TabsTrigger value="commercial">Comercial</TabsTrigger>
        <TabsTrigger value="inventory">Estoque</TabsTrigger>
        <TabsTrigger value="rules">Regras e alertas</TabsTrigger>
        <TabsTrigger value="summary">Resumo</TabsTrigger>
      </TabsList>
      <TabsContent value="main" className="pt-4">
        <ProductMainDataSection data={data} onChange={handleField} />
      </TabsContent>
      <TabsContent value="commercial" className="pt-4">
        <ProductCommercialSection data={data} onChange={handleField} />
      </TabsContent>
      <TabsContent value="inventory" className="pt-4">
        <ProductInventorySection data={data} onChange={handleField} />
      </TabsContent>
      <TabsContent value="rules" className="pt-4">
        <ProductRulesSection rules={data.rules ?? defaultRuleSettings} onChange={handleRuleChange} />
      </TabsContent>
      <TabsContent value="summary" className="pt-4">
        <ProductSummaryCard data={data} isNew={isNew} />
      </TabsContent>
    </Tabs>
  );
}
