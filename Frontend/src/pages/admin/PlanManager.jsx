import LayoutAdmin from "@/components/LayoutAdmin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanManager = () => {
  //Vou importar as informações dos planos
  const [data, setData] = useState([
    { name: "Plano Mensal", price: 100.0, duration: 30 },
    { name: "Plano Anual", price: 900.0, duration: 365 },
  ]);

  const navigate = useNavigate();

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-center">
              <p className="text-muted-foreground">Valor:</p>
              <p className="text-lg font-semibold text-green-600">
                R$ {item.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground">Duração:</p>
              <p className="text-base">{item.duration} dias</p>
            </CardContent>
          </Card>
        ))}

        {/* Card de Novo Plano */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition duration-300 cursor-pointer"
          onClick={() => navigate("/planos/criar")}
        >
          <PlusCircle className="text-gray-600 size-8 mb-2" />
          <p className="text-sm text-gray-700 font-medium">Criar Novo Plano</p>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default PlanManager;
