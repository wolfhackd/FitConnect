import LayoutAdmin from "@/components/LayoutAdmin";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster, toast } from "sonner";
import { DatePicker } from "@/components/DatePicker";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [plano, setPlano] = useState("");
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !cpf || !plano || !birth || !phone) {
      toast.error("Preencha todos os campos.");
      return;
    }

    if (!/^\d+$/.test(cpf)) {
      toast.error("Digite apenas números no campo de CPF.");
      return;
    }

    const data = new Date(birth).toISOString();

    toast.success(`Aluno cadastrado com sucesso! 🎉`);

    console.log({
      name,
      cpf,
      plano,
      data,
      phone,
    });

    // aqui você pode enviar para sua API, se quiser
  };

  return (
    <LayoutAdmin>
      <Toaster position="top-center" />
      <div className="bg-white rounded-md my-4">
        <form
          className="space-y-4 max-w-md mx-auto p-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Número de telefone</Label>
            <Input
              name="phone"
              placeholder="Digite seu telefone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              name="cpf"
              type="number"
              placeholder="12345678910"
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plano">Plano</Label>
            <Select onValueChange={(value) => setPlano(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Escolha um plano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="mensalPlus">Mensal Plus</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
                <SelectItem value="anualPlus">Anual Plus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Data de Nascimento</Label>
            <DatePicker selectedDate={birth} onChange={setBirth} />
          </div>

          <Button type="submit" className="w-full">
            Inscrever-se
          </Button>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default CreateStudent;
