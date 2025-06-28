import LayoutAdmin from "@/components/LayoutAdmin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";
import { DatePicker } from "@/components/DatePicker";
import { planSearch } from "@/utils/PlanSearch";
import axios from "axios";

const EditStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.user;
  // console.log(user);

  //Dados do formulário
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [plano, setPlano] = useState("");
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState("");
  const [datainput, setDatainput] = useState([]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setCpf(user.cpf);
      setBirth(user.birth);
      setPhone(user.phone);
      //   setPlano(user.plano); é outra tabela
    }
  }, [user]);

  //buscar Planos
  //Tenho que buscar a tabela de plano com esse usuario e mostrar o plano dele
  useEffect(() => {
    const academyId = localStorage.getItem("academyId");

    planSearch(academyId)
      .then((data) => setDatainput(data))
      .catch((err) => toast.error(err.response?.data?.message));

    axios
      .post("http://localhost:3000/plan/getPlanByUser", {
        id: user.id,
        academyId: localStorage.getItem("academyId"),
      })
      .then((res) => {
        setPlano(res.data.plans[0].plano.id);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  }, [user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = user.id;

    if (!name || !cpf || !birth || !phone) {
      toast.error("Preencha todos os campos.");
      return;
    }

    if (!/^\d+$/.test(cpf)) {
      toast.error("Digite apenas números no campo de CPF.");
      return;
    }

    const data = new Date(birth).toISOString();

    console.log({
      id,
      name,
      cpf,
      birth: data,
      phone,
      academyId: localStorage.getItem("academyId"),
      plano,
    });
    //falta termimnar isso

    axios
      .post("http://localhost:3000/student/update", {
        id,
        name,
        cpf,
        birth: data,
        phone,
        academyId: localStorage.getItem("academyId"),
        plano,
      })
      .then((res) => {
        toast.success("Aluno atualizado com sucesso");
        navigate("/alunos");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
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

        <h1 className="text-2xl font-bold mb-6">Edição de Aluno</h1>

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
            <Select value={plano} onValueChange={setPlano}>
              <SelectTrigger>
                <SelectValue placeholder="Escolha um plano" />
              </SelectTrigger>
              <SelectContent>
                {datainput.map((item) => (
                  <SelectItem value={item.id} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="birth">Data de Nascimento</Label>
            <DatePicker selectedDate={birth} onChange={setBirth} />
          </div>

          <Button type="submit" className="w-full mt-4 cursor-pointer">
            Confirmar edição
          </Button>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default EditStudent;
