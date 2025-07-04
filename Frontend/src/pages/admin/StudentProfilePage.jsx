import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import axios from "axios";
import { DataTransformer } from "@/utils/DataTransformer";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  ClipboardList,
  DollarSign,
  Dumbbell,
  LineChart,
  List,
  Pencil,
  User,
} from "lucide-react";
import { BirthDate } from "@/utils/BirthDate";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import TrainGroup from "@/components/TrainGroup";

export default function StudentProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.user;
  const [plan, setPlan] = useState({});

  useEffect(() => {
    const academyId = localStorage.getItem("academyId");

    axios
      .post("http://localhost:3000/plan/getPlanByUser", {
        id: user.id,
        academyId: academyId,
      })
      .then((res) => {
        setPlan(res.data.plans[0]);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  }, [user.id]);

  const [trainings, setTrainings] = useState([
    {
      id: 1,
      name: "Exercício 1",
      description: "Descrição do exercício 1",
      status: true,
    },
    {
      id: 2,
      name: "Exercício 2",
      description: "Descrição do exercício 2",
      status: false,
    },
  ]);

  return (
    <LayoutAdmin>
      <Toaster />
      <div className="bg-white p-4 rounded-md mt-4 relative flex flex-col">
        <Button
          variant={"outline"}
          className={
            "cursor-pointer text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white absolute top-2 left-4 rounded-none"
          }
          onClick={() => navigate(-1)}
        >
          <ArrowLeft /> Voltar
        </Button>

        <h1
          className="text-3xl font-bold text-gray-800 text-center
        "
        >
          Perfil do Aluno
        </h1>
        <div className="border-b-2 border-t-2 border-gray-200 ">
          <div className="flex gap-2 items-center flex-1 p-10 font-semibold">
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback>
                <User className="rounded-full size-30 bg-gray-200 text-gray-600" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-xl">
              <h2>Nome: {user.name}</h2>
              <h2>Plano: {plan?.plano?.name}</h2>
              <span className="text-gray-400">
                Matrícula: {DataTransformer(user.createdAt)}
              </span>
              <p>
                Status:{" "}
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    user.status
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {user.status ? "Ativo" : "Inativo"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="dados">
            <TabsList className={"w-full"}>
              <TabsTrigger className={"cursor-pointer"} value="dados">
                <ClipboardList />
                Dados
              </TabsTrigger>
              <TabsTrigger className={"cursor-pointer"} value="treinos">
                <Dumbbell />
                Treinos
              </TabsTrigger>
              <TabsTrigger className={"cursor-pointer"} value="pagamentos">
                <DollarSign />
                Pagamentos
              </TabsTrigger>
              <TabsTrigger className={"cursor-pointer"} value="avaliacoes">
                <LineChart />
                Avaliações
              </TabsTrigger>
            </TabsList>
            <h1 className="text-3xl mt-6 text-center">Ações Rápidas</h1>
            <nav className="mt-4 flex flex-wrap justify-center gap-2 border-t-2 border-b-2 px-2">
              <Button
                variant={"ghost"}
                className={"cursor-pointer"}
                onClick={() =>
                  navigate("/alunos/editar", { state: { user: user } })
                }
              >
                Editar aluno
              </Button>
              <Button variant={"ghost"} className={"cursor-pointer"}>
                Nova avaliação
              </Button>
              <Button variant={"ghost"} className={"cursor-pointer"}>
                Mudar plano
              </Button>
              <Button variant={"ghost"} className={"cursor-pointer"}>
                Inativar
              </Button>
            </nav>
            <TabsContent value="dados">
              <h1 className="text-3xl border-b-2 border-gray-200 p-4">Dados</h1>
              <ul className="list-disc pl-10 border-b-2 border-gray-200 p-4">
                <li>Nome: {user.name}</li>
                <li>Nascimento: {DataTransformer(user.birth)}</li>
                <li>Telefone: {user.phone}</li>
                <li>Endereço: rararar</li>
              </ul>
            </TabsContent>
            <TabsContent value="treinos">
              <h1 className="text-3xl border-b-2 border-gray-200 p-4">
                Treinos
              </h1>
              <div>
                <div>
                  <h3 className="text-2xl">Séries de Treino</h3>
                  {/* talvez eu tenha que criar outra div aqui */}
                  <div className="flex flex-wrap justify-between items-center">
                    <span>Vísivel Para Aluno</span>
                    <div className="flex flex-col">
                      <span>Vencimento</span>
                      <span className="text-blue-400 underline">
                        11/11/2025
                      </span>
                    </div>
                  </div>
                  {/* Os treinos */}
                  <div className="flex flex-col gap-4">
                    {trainings.map((training) => {
                      if (!training.status) return null;
                      return (
                        <TrainGroup
                          key={training.id}
                          name={training.name}
                          status={training.status}
                        />
                      );
                    })}
                    <Button
                      variant={"default"}
                      className={
                        "cursor-pointer rounded-none bg-[#EF4444] w-fit self-end"
                      }
                    >
                      Criar novo treino
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-2xl">Séries Fora Do Treino</h3>
                    <div className="flex flex-wrap justify-between items-center">
                      <span>Não Vísivel Para Aluno</span>
                    </div>
                    <div className="flex flex-col gap-4">
                      {trainings.map((training) => {
                        if (training.status) return null;
                        return (
                          <TrainGroup
                            key={training.id}
                            name={training.name}
                            status={training.status}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pagamentos"></TabsContent>
            <TabsContent value="avaliacoes"></TabsContent>
          </Tabs>
        </div>
      </div>
    </LayoutAdmin>
  );
}
