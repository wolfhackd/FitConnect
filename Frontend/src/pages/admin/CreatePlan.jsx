import LayoutAdmin from "@/components/LayoutAdmin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const CreatePlan = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      price: price.toString(),
      duration: parseInt(duration),
      academyId: localStorage.getItem("academyId"),
    });

    axios
      .post("http://localhost:3000/plan/create", {
        name,
        price: price.toString(),
        duration: parseInt(duration),
        academyId: localStorage.getItem("academyId"),
      })
      .then((response) => {
        toast.success(
          "Plano " + response.data.plan.name + " criado com sucesso!"
        );
        navigate("/planos");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <LayoutAdmin>
      <Toaster position="top-center" />
      <div className="bg-white mt-4 p-6 rounded-md shadow-md max-w-xl mx-auto ">
        {/* Botão de voltar estilizado */}
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <h1 className="text-2xl font-bold mb-6">Criar Novo Plano</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome do Plano</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Plano Anual"
              required
            />
          </div>
          <div>
            <Label htmlFor="price">Preço (R$)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ex: 99.90"
              required
            />
          </div>
          <div>
            <Label htmlFor="duration">Duração (dias)</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Ex: 30"
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4 cursor-pointer">
            Criar Plano
          </Button>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default CreatePlan;
