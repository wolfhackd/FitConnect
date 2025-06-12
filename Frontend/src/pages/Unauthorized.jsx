import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <AlertTriangle className="text-yellow-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Acesso negado</h1>
      <p className="text-gray-600 mb-6">
        Você não tem permissão para acessar esta página.
      </p>
      <Button onClick={() => navigate("/login")}>Voltar para o login</Button>
    </div>
  );
};

export default Unauthorized;
