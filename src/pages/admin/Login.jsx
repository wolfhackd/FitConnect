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
const items = [
  {
    value: "teste",
    label: "G4",
  },
];

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-[#111827]">
        <Tabs defaultValue="student" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="student">Aluno</TabsTrigger>
            <TabsTrigger value="teacher">Professor</TabsTrigger>
          </TabsList>
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
                      <CommandEmpty>No item found.</CommandEmpty>
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
            <TabsContent value="student">
              <CardHeader>
                <CardTitle>Login Aluno</CardTitle>

                <CardDescription>
                  Digite seu cpf ou código de acesso para acessar seu treino.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="teacher-id">CPF ou Código de Acesso</Label>
                  <Input
                    id="teacher-id"
                    type="text"
                    placeholder="000.000.000-00 ou código"
                  />
                </div>
              </CardContent>
              <CardFooter className={"mt-2 "}>
                <Button className={"cursor-pointer"}>Acessar Painel</Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="teacher">
              <CardHeader>
                <CardTitle>Login do Professor</CardTitle>
                <CardDescription>
                  Digite seu CPF ou código de acesso para entrar no painel.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="teacher-id">CPF ou Código de Acesso</Label>
                  <Input
                    id="teacher-id"
                    type="text"
                    placeholder="000.000.000-00 ou código"
                  />
                </div>
              </CardContent>
              <CardFooter className={"mt-2 "}>
                <Button className={"cursor-pointer"}>Acessar Painel</Button>
              </CardFooter>
            </TabsContent>
          </Card>
        </Tabs>
      </section>
    </>
  );
};

export default Login;
