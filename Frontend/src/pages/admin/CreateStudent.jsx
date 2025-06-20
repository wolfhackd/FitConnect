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
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [plano, setPlano] = useState("");
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

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

    // Envio para API viria aqui
  };

  return (
    <LayoutAdmin>
      <Toaster position="top-center" />
      <div className="bg-white mt-4 p-6 rounded-md shadow-md max-w-xl mx-auto">
        {/* Botão de voltar */}
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <h1 className="text-2xl font-bold mb-6">Cadastro de Aluno</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite o nome do aluno"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              placeholder="Digite o telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="number"
              placeholder="Digite apenas números"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="plan">Plano</Label>
            <Select onValueChange={setPlano}>
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

          <div>
            <Label htmlFor="birth">Data de Nascimento</Label>
            <DatePicker selectedDate={birth} onChange={setBirth} />
          </div>

          <Button type="submit" className="w-full mt-4 cursor-pointer">
            Cadastrar
          </Button>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default CreateStudent;
