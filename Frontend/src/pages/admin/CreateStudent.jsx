import LayoutAdmin from "@/components/LayoutAdmin";
import React from "react";
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
  return (
    <LayoutAdmin>
      <Toaster position="top-center" />
      <div className="bg-white rounded-md my-4">
        <form className="space-y-4 max-w-md mx-auto p-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" placeholder="Digite seu nome" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" type="number" placeholder="12345678910" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plano">Plano</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Escolha um plano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="trimestral">Trimestral</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Data de Nascimento</Label>
            <DatePicker />
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
