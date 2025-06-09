import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
("use client");

import * as React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [tab, setTab] = useState("student");
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/academy")
      .then((response) => {
        const academies = response.data;
        const formatedItems = academies.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setItems(formatedItems);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Erro ao buscar academias");
      });
  }, []);

  function handleSubmit(event, tab) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const academyId = formData.get("academyId");
    const accessId = formData.get("accessId");
    const userType = tab === "student" ? 0 : 1;

    const payload = {
      academyId: academyId,
      accessId: accessId,
      userType: userType,
    };
    if (academyId === "" || accessId === "") {
      toast.error("Campos obrigatórios vazios");
      return;
    }
    if (!/^\d+$/.test(accessId)) {
      toast.error("Digite apenas números no campo de acesso.");
      return;
    }

    axios
      .post("http://localhost:3000/login", payload)
      .then((response) => {
        if (response.status === 400) {
          toast.error(response.data.message);
        }
        console.log(response.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  return (
    <>
      <Toaster position="top-center" />
      <section className="flex items-center justify-center h-screen bg-[#111827]">
        <Tabs
          defaultValue="student"
          onValueChange={setTab}
          className="w-[400px]"
        >
          <TabsList>
            <TabsTrigger value="student">Aluno</TabsTrigger>
            <TabsTrigger value="teacher">Professor</TabsTrigger>
          </TabsList>
          {/* teacher-id , student-id */}
          <Card>
            <CardHeader>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? items.find((item) => item.value === value)?.label
                      : "Selecionar Academia..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Selecionar Academia..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
                      <CommandGroup>
                        {items.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            {item.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                value === item.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </CardHeader>
            {/* student */}
            <TabsContent value="student">
              <form
                action=""
                method="post"
                onSubmit={(e) => handleSubmit(e, tab)}
              >
                <input type="hidden" name="academyId" value={value} />
                <CardHeader>
                  <CardTitle>Login do Aluno</CardTitle>
                  <CardDescription>
                    Digite seu CPF ou código de acesso para acessar seu treino.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 mt-2">
                  <div className="grid gap-3">
                    <Label htmlFor="accessId">CPF ou Código de Acesso</Label>
                    <Input
                      name="accessId"
                      type="text"
                      pattern="\d*"
                      inputMode="numeric"
                      placeholder="000.000.000-00 ou código"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className={"mt-2 "}>
                  <Button type="submit" className={"cursor-pointer"}>
                    Acessar Painel
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            {/* teacher */}
            <TabsContent value="teacher">
              <form
                action=""
                method="get"
                onSubmit={(e) => handleSubmit(e, tab)}
              >
                <input type="hidden" name="academyId" value={value} />
                <CardHeader>
                  <CardTitle>Login do Professor</CardTitle>
                  <CardDescription>
                    Digite seu CPF ou código de acesso para entrar no painel.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 mt-2">
                  <div className="grid gap-3">
                    <Label htmlFor="accessId">CPF ou Código de Acesso</Label>
                    <Input
                      name="accessId"
                      type="text"
                      pattern="\d*"
                      inputMode="numeric"
                      placeholder="000.000.000-00 ou código"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className={"mt-2 "}>
                  <Button type="submit" className={"cursor-pointer"}>
                    Acessar Painel
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Card>
        </Tabs>
      </section>
    </>
  );
};

export default Login;
