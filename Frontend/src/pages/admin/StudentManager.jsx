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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const StudentManager = () => {
  const [status, setStatus] = React.useState("");
  const [statusInput, setStatusInput] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [users, setUsers] = React.useState([]); //Vou colocar a resposta da api aqui

  React.useEffect(() => {
    if (statusInput === "all") {
      setStatus(null);
    } else if (statusInput === "active") {
      setStatus(1);
    } else if (statusInput === "inactive") {
      setStatus(0);
    }
  }, [statusInput]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    const academyId = localStorage.getItem("academyId");
    const studentId = inputValue;

    const payload = {
      academyId,
      studentId,
      status,
    };

    axios
      .post("http://localhost:3000/academy/listusers", payload, {
        withCredentials: true,
      })
      .then((response) => {
        setUsers(response.data.users);
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
              <Input
                name="search"
                placeholder="Digite o nome ou o cpf do aluno"
                onChange={handleInput}
              />
              <Select
                defaultValue="all"
                onValueChange={(e) => setStatusInput(e)}
              >
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
            <Button
              type="submit"
              variant="outline"
              className={"cursor-pointer bg-[#1F2937] text-white"}
            >
              Criar Aluno
            </Button>
          </div>
        </div>
        {/* Aqui vai a tabela de alunos */}
        <div className="bg-white mt-4 rounded-md p-4 flex items-center justify-center">
          {users.length === 0 && (
            <span>Nenhum aluno encontrado ou pesquisa inválida</span>
          )}
          <div className="gap-4 grid grid-cols-5">
            {users.map((user) => {
              return (
                <Card className={"w-80"}>
                  <CardHeader className={"justify-center"}>
                    <CardTitle>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="Avatar img"
                          className="rounded-full w-24 h-24"
                        />
                        <AvatarFallback>
                          <User className="rounded-full size-10 bg-gray-200 text-gray-600" />
                        </AvatarFallback>
                      </Avatar>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold">{user.name}</p>

                    <p>
                      <span className="font-bold">CPF:</span>
                      {user.cpf}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
