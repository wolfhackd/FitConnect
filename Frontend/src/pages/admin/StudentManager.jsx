import React from "react";
import Sidebar from "../../components/Sidebar";
import UserMenu from "@/components/UserMenu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const StudentManager = () => {
  const [status, setStatus] = React.useState("");

  function handleClick() {
    let payload = {};
    if (status === "all") {
      payload = {
        id: localStorage.getItem("academyId"),
        status: null,
      };
    } else {
      payload = {
        id: localStorage.getItem("academyId"),
        status: status,
      };
    }
    axios
      .post("http://localhost:3000/academy/listusers", payload, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  return (
    <div className="w-screen flex">
      <Sidebar />
      <section className="flex-1 bg-[#E5E7EB] p-8">
        <UserMenu />
        {/* Aqui vai a barra de pesquisa e o botão de criar aluno */}
        <div className="bg-white mt-4 rounded-md p-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex w-full max-w-md items-center gap-2">
              <Input placeholder="Digite o nome ou o cpf do aluno" />
              {/* não estou capturando o valor */}
              <Select defaultValue="all" onValueChange={(e) => setStatus(e)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                variant="outline"
                className={"cursor-pointer bg-[#1F2937] text-white"}
                onClick={handleClick}
              >
                Procurar
              </Button>
            </div>
            {/* Filtros */}
            <Button
              type="submit"
              variant="outline"
              className={"cursor-pointer bg-[#1F2937] text-white"}
            >
              Criar Aluno
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentManager;

//Tenho que verificar se tem aluno
//Se tiver aluno, mostrar o aluno
//Se não tiver aluno, mostrar mensagem
//Tenho que colocar opções de criar alunos e editar alunos
//O id da academia ta no localstorage ------------------------
