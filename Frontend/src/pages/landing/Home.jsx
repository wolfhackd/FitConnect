import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CreditCard,
  Radius,
  CalendarDays,
  Smartphone,
  BellRing,
  Dumbbell,
  UserPen,
  CalendarClock,
} from "lucide-react";
import Footer from "../../components/Footer";

const Home = () => {
  const cardData = [
    {
      title: "Gestão de pagamentos",
      description:
        "Controle mensalidades, vencimentos e recebimentos com facilidade.",
      icon: CreditCard,
    },
    {
      title: "Cadastro de alunos",
      description:
        "Gerencie informações, histórico e status de cada aluno em um só lugar.",
      icon: UserPen,
    },
    {
      title: "Planos e matrículas",
      description:
        "Crie, edite e acompanhe planos de treino e matrículas ativas ou vencidas.",
      icon: Dumbbell,
    },
    {
      title: "Agenda de aulas",
      description:
        "Organize treinos, horários e reservas com um calendário interativo.",
      icon: CalendarDays,
    },
    {
      title: "Relatórios e desempenho",
      description:
        "Acompanhe dados da academia com gráficos claros e insights em tempo real.",
      icon: Radius,
    },
    {
      title: "Acesso mobile",
      description:
        "Gestão completa também pelo celular, onde e quando precisar.",
      icon: Smartphone,
    },
    {
      title: "Notificações automáticas",
      description:
        "Receba alertas de vencimentos, novos alunos e atividades importantes.",
      icon: BellRing,
    },
    {
      title: "Histórico de treinos",
      description:
        "Visualize a evolução e frequência de cada aluno com poucos cliques.",
      icon: CalendarClock,
    },
  ];

  return (
    <>
      <div>
        {/* HeroSection */}
        {/* <section className="relative flex flex-col min-h-screen max-w-screen overflow-hidden bg-[#111827]"> */}
        <section
          className="flex flex-col min-h-screen max-w-screen bg-[#111827]"
          id="home"
        >
          <Navbar />

          <div className="flex flex-col items-center justify-center flex-1 text-white gap-6 z-10">
            <h2 className="font-bold text-7xl md:text-9xl">FitConnect</h2>

            <p className="font-semibold text-2xl">
              Gerencie sua academia com agilidade e segurança.
            </p>
            <p className="text-xl">
              Controle de alunos, planos, pagamentos e treinos em um só lugar.
            </p>
            <Button
              className={"bg-[#EF4444] cursor-pointer text-2xl h-14 px-8"}
            >
              Solicitar acesso
            </Button>
          </div>
        </section>
        {/* Cards Functions Section */}
        <section id="functions">
          <h3 className="font-bold text-4xl text-center p-10">
            Funcionalidades
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 place-items-center">
            {cardData.map((card, index) => {
              return (
                <Card className={"w-56 h-full"} key={index}>
                  <CardHeader>
                    <CardTitle className={"text-center"}>
                      {card.title}
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                      <card.icon className="size-20" />
                    </CardContent>
                    <CardDescription className={"text-center pt-6"}>
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>
        {/* Demonstração visual do site website */}
        <section
          className="h-screen bg-[#F3F4F6] flex flex-col items-center justify-center"
          id="about"
        >
          <p>Em construção</p>
          <p>Área de Demonstração de app</p>
        </section>
        {/* Agende já uma consulta */}
        {/* Footer Section */}
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
