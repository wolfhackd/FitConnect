import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import axios from "axios";
import { DataTransformer } from "@/utils/DataTransformer";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { BirthDate } from "@/utils/BirthDate";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        // console.log(res?.data.plans[0].academia);
        // console.log(res?.data.plans[0]);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  }, [user.id]);

  console.log(user);
  return (
    <LayoutAdmin>
      <Toaster />
      <div className="bg-white p-4 rounded-md mt-4 relative">
        <div className="flex gap-2 items-center flex-1">
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>
              <User className="rounded-full size-16 bg-gray-200 text-gray-600" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-[#EF4444] font-bold">{user.name}</h2>
            <span>
              {BirthDate(user.birth)} anos | CPF: {user.cpf}
            </span>
          </div>
        </div>
        <Button
          variant={"outline"}
          className={
            "cursor-pointer text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white absolute top-2 right-4 rounded-none"
          }
          onClick={() => navigate("/alunos/editar", { state: { user } })}
        >
          Editar
        </Button>
        <Tabs defaultValue="geral" className={"mt-4"}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              className={
                "cursor-pointer text-[#EF4444] data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
              }
              value="geral"
            >
              Informações do Aluno
            </TabsTrigger>
            <TabsTrigger
              className={
                "cursor-pointer text-[#EF4444] data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
              }
              value="treino"
            >
              Treino do Aluno
            </TabsTrigger>
            <TabsTrigger
              className={
                "cursor-pointer text-[#EF4444] data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
              }
              value="historico"
            >
              Historico de Atividades
            </TabsTrigger>
            <TabsTrigger
              className={
                "cursor-pointer text-[#EF4444] data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
              }
              value="avaliacao"
            >
              Avaliação Fisica
            </TabsTrigger>
          </TabsList>
          <TabsContent value="geral">
            <div>
              <h1 className="text-[#EF4444] font-bold text-2xl">
                Informações do Aluno
              </h1>
              {/* Falta adicionar as informações do plano se for adicionar nesse tab */}
              {/* Fazer um whats.me aq */}
              <span>
                Telefone:{" "}
                <a
                  href={`https://wa.me/${user.phone}`}
                  target="_blank"
                  className="underline"
                >
                  {user.phone}
                </a>
              </span>
              <br />
              <span>Nascimento: {DataTransformer(user.birth)}</span>
              <br />
              <span>Idade: {BirthDate(user.birth)} Anos</span>
              <br />
              <span>CPF: {user.cpf}</span>
              <h1 className="text-[#EF4444] font-bold text-2xl">
                Observações:
              </h1>
              <span>
                {user.observations
                  ? user.observations
                  : "Nenhuma Observação registrada"}
              </span>
            </div>
          </TabsContent>
          <TabsContent value="treino"></TabsContent>
          <TabsContent value="historico"></TabsContent>
          <TabsContent value="avaliacao"></TabsContent>
        </Tabs>
      </div>
    </LayoutAdmin>
  );
}
