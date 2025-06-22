import LayoutAdmin from "@/components/LayoutAdmin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanManager = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    //Construir a rota primeiro
  };

  useEffect(() => {
    axios
      .post("http://localhost:3000/plan/list", {
        academyId: localStorage.getItem("academyId"),
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition duration-300 cursor-pointer relative"
          >
            <Button
              type="submit"
              variant="outline"
              className={
                "cursor-pointer hover:bg-[#1F2937] hover:text-white absolute top-2 left-2"
              }
              onClick={() => handleClick(item.id)}
            >
              Editar
            </Button>
            <CardHeader>
              <CardTitle className="text-xl text-center">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-center">
              <p className="text-muted-foreground">Valor:</p>
              <p className="text-lg font-semibold text-green-600">
                R$ {item.price}
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
