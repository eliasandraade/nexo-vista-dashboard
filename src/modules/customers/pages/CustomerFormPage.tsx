import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { customerService } from "../services/customerService";
import { CustomerMainDataSection } from "../components/CustomerMainDataSection";
import { CustomerContactSection } from "../components/CustomerContactSection";
import { CustomerCommercialSection } from "../components/CustomerCommercialSection";
import { CustomerSummaryCard } from "../components/CustomerSummaryCard";
import type { CustomerFormInput, Customer } from "../types";

const emptyForm: CustomerFormInput = {
  personType: "fisica",
  name: "",
  tradeName: "",
  document: "",
  stateRegistration: "",
  birthDate: "",
  status: "active",
  email: "",
  phone: "",
  phoneSecondary: "",
  zipCode: "",
  address: "",
  addressNumber: "",
  addressComplement: "",
  neighborhood: "",
  city: "",
  state: "",
  creditLimit: "",
  commercialNotes: "",
  preferential: false,
  emailBilling: false,
};

export default function CustomerFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: existing, isLoading } = useQuery({
    queryKey: ["customer", id],
    queryFn: () => customerService.getById(id!),
    enabled: isEdit,
  });

  const [form, setForm] = useState<CustomerFormInput>(emptyForm);

  useEffect(() => {
    if (existing) {
      setForm({
        personType: existing.personType,
        name: existing.name,
        tradeName: existing.tradeName ?? "",
        document: existing.document,
        stateRegistration: existing.stateRegistration ?? "",
        birthDate: existing.birthDate ?? "",
        status: existing.status,
        email: existing.email,
        phone: existing.phone,
        phoneSecondary: existing.phoneSecondary ?? "",
        zipCode: existing.zipCode,
        address: existing.address,
        addressNumber: existing.addressNumber,
        addressComplement: existing.addressComplement ?? "",
        neighborhood: existing.neighborhood,
        city: existing.city,
        state: existing.state,
        creditLimit: existing.creditLimit?.toString() ?? "",
        commercialNotes: existing.commercialNotes,
        preferential: existing.preferential,
        emailBilling: existing.emailBilling,
      });
    }
  }, [existing]);

  const onChange = (field: keyof CustomerFormInput, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: () => isEdit ? customerService.update(id!, form) : customerService.create(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast({ title: isEdit ? "Cliente atualizado" : "Cliente cadastrado", description: "Operação realizada com sucesso." });
      navigate("/clientes");
    },
    onError: () => {
      toast({ title: "Erro", description: "Não foi possível salvar o cliente.", variant: "destructive" });
    },
  });

  const validate = (): string | null => {
    if (!form.name.trim()) return "Nome é obrigatório.";
    if (!form.document.trim()) return "Documento é obrigatório.";
    if (!form.phone.trim() && !form.email.trim()) return "Informe ao menos telefone ou e-mail.";
    if (form.email && !form.email.includes("@")) return "E-mail inválido.";
    return null;
  };

  const handleSave = () => {
    const error = validate();
    if (error) {
      toast({ title: "Validação", description: error, variant: "destructive" });
      return;
    }
    mutation.mutate();
  };

  if (isEdit && isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEdit ? "Editar cliente" : "Novo cliente"}
        description="Cadastre e configure as informações do cliente."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/clientes")}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Cancelar
            </Button>
            <Button onClick={handleSave} disabled={mutation.isPending}>
              <Save className="h-4 w-4 mr-2" /> {mutation.isPending ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <Tabs defaultValue="main" className="space-y-4">
          <TabsList>
            <TabsTrigger value="main">Dados principais</TabsTrigger>
            <TabsTrigger value="contact">Contato e endereço</TabsTrigger>
            <TabsTrigger value="commercial">Comercial</TabsTrigger>
          </TabsList>
          <TabsContent value="main">
            <SectionCard title="Dados principais">
              <CustomerMainDataSection data={form} onChange={onChange} />
            </SectionCard>
          </TabsContent>
          <TabsContent value="contact">
            <SectionCard title="Contato e endereço">
              <CustomerContactSection data={form} onChange={onChange} />
            </SectionCard>
          </TabsContent>
          <TabsContent value="commercial">
            <SectionCard title="Informações comerciais">
              <CustomerCommercialSection data={form} onChange={onChange} existing={isEdit ? (existing as Customer) : null} />
            </SectionCard>
          </TabsContent>
        </Tabs>

        {isEdit && existing && <CustomerSummaryCard customer={existing} />}
      </div>
    </div>
  );
}
