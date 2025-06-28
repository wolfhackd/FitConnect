import React, { useEffect } from "react";
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
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "@/components/LayoutAdmin";

const StudentManager = () => {
  const [statusInput, setStatusInput] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 20;
  const [inputValue, setInputValue] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const navigate = useNavigate();

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  function goToNextPage() {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    const academyId = localStorage.getItem("academyId");
    const studentId = inputValue;
    let status = null;
    if (statusInput === "all") {
      status = null;
    } else if (statusInput === "active") {
      status = true;
    } else if (statusInput === "inactive") {
      status = false;
    }

    const payload = {
      academyId,
      studentId,
      status,
      userType: 0,
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

  useEffect(() => {
    handleClick();
  }, []);

  function handleClickEdit(user) {
    navigate("/alunos/editar", { state: { user } });
    //Tá faltando terminar (Só tem essa parte feita, falta o restante)
  }

  return (
    <LayoutAdmin className="flex-1 bg-[#E5E7EB] p-8">
      {/* Aqui vai a barra de pesquisa e o botão de criar aluno */}
      <div className="bg-white mt-4 rounded-md p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex w-full max-w-md items-center gap-2">
            <Input
              name="search"
              placeholder="Digite o nome ou o cpf do aluno"
              onChange={handleInput}
            />
            <Select defaultValue="all" onValueChange={(e) => setStatusInput(e)}>
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
            onClick={() => navigate("/alunos/criar")}
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
          {currentUsers.map((user) => {
            return (
              <Card className={"w-80 relative"} key={user.id}>
                <Button
                  type="submit"
                  variant="outline"
                  className={
                    "cursor-pointer hover:bg-[#1F2937] hover:text-white absolute top-2 left-2"
                  }
                  onClick={() => handleClickEdit(user)}
                >
                  Editar
                </Button>
                <span
                  className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full font-medium ${
                    user.status
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {user.status ? "Ativo" : "Inativo"}
                </span>
                <CardHeader className={"justify-center"}>
                  {/* <CardAction>
                    {user.status == true ? "Ativo" : "Inativo"}
                  </CardAction> */}
                  <CardTitle>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Avatar img"
                        className="rounded-full w-24 h-24"
                      />
                      <AvatarFallback>
                        <User className="rounded-full size-24 bg-gray-200 text-gray-600" />
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
      <div
        className={`mt-4 flex justify-center items-center gap-4 w-full rounded-md self-center ${
          users.length === 0 && "hidden"
        }`}
      >
        <Button
          variant="outline"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={"cursor-pointer"}
        >
          Anterior
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={"cursor-pointer"}
        >
          Próxima
        </Button>
      </div>
    </LayoutAdmin>
  );
};

export default StudentManager;

//Tenho que colocar opções de criar alunos e editar alunos
