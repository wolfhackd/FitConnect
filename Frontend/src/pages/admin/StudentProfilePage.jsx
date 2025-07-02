import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import axios from "axios";
import { DataTransformer } from "@/utils/DataTransformer";

export default function StudentProfilePage() {
  const location = useLocation();
  // const navigate = useNavigate();
  const user = location.state.user;
  const [plan, setPlan] = useState(null);

  const birthDate = DataTransformer(user.birth);

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
        console.log(res?.data.plans[0]);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  }, [user.id]);

  return (
    <LayoutAdmin>
      <Toaster />
      <div className="mt-4">
        <Card>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList>
                <TabsTrigger className={"cursor-pointer"} value="profile">
                  Perfil
                </TabsTrigger>
                <TabsTrigger className={"cursor-pointer"} value="plan">
                  Plano
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <div className="grid grid-cols-2 gap-8">
                  {/* <h1 className="underline text-xl">Informações pessoais</h1> */}
                  <div>
                    <h1 className="text-2xl font-bold">Perfil</h1>
                    <h2>
                      Nome: <span>{user.name}</span>
                    </h2>
                    <h2>
                      CPF: <span>{user.cpf}</span>
                    </h2>
                    <h2>
                      Data de Nascimento: <span>{birthDate}</span>
                    </h2>
                    <h2>
                      Telefone: <span>{user.phone}</span>
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Observações</h1>
                    <div className="flex items-center">
                      {/* <p>{user.observations}</p> */}
                      <p>Nenhuma observação</p>

                      {/* Adicionar ao banco */}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Plano</h1>
                    {plan ? (
                      <>
                        <div className="flex flex-col">
                          <p>Nome: {plan.plano.name}</p>
                          <p>Inicio: {DataTransformer(plan.inicio)}</p>
                          <p>Fim: {DataTransformer(plan.fim)}</p>
                          <p>Duração: {plan.plano.duration} dias</p>
                        </div>
                      </>
                    ) : (
                      <p>Nenhum plano</p>
                    )}
                    {/* <div className="flex items-center">{plan.plano.name}</div> */}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="plan">
                <p>Plano</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </LayoutAdmin>
  );
}
