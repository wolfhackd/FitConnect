import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        <div className="bg-[#111827] flex flex-col items-center justify-center flex-1 text-white gap-6">
          <h2 className=" font-bold text-9xl">FitConnect</h2>
          <p className="font-semibold text-2xl">
            Gerencie sua academia com agilidade e segurança.
          </p>
          <p className="text-xl">
            Controle de alunos, planos, pagamentos e treinos em um só lugar.
          </p>
          <Button className={"bg-[#EF4444] cursor-pointer text-2xl h-14 px-8"}>
            Solicitar acesso
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
