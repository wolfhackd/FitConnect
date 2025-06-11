import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  Dumbbell,
  ImageIcon,
  ClockIcon,
  CalendarIcon,
  MessageSquareIcon,
  StarIcon,
  FileTextIcon,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const AcademyIcon = () => {
  return (
    <div className="flex items-center p-4 rounded-md">
      <Dumbbell className="text-black size-7" />
    </div>
  );
};

//Fazer uma função para quando clicar no item ele fica vermelho e na sua pagina

const Sidebar = () => {
  const icons = [
    { Icon: ImageIcon, label: "Imagens" },
    { Icon: ClockIcon, label: "Recentes" },
    { Icon: CalendarIcon, label: "Calendário" },
    { Icon: MessageSquareIcon, label: "Mensagens" },
    { Icon: StarIcon, label: "Favoritos" },
    { Icon: FileTextIcon, label: "Documentos" },
  ];
  return (
    <TooltipProvider>
      <div className="bg-white p-4 h-screen w-18 flex flex-col items-center gap-6">
        <AcademyIcon />
        <nav className="flex flex-col gap-1">
          {icons.map((icon, index) => {
            return (
              <nav>
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Button
                      variant="ghost"
                      className="hover:bg-gray-100 text-black size-12 hover:text-[#EF4444] cursor-pointer"
                      aria-label={icon.label}
                    >
                      <icon.Icon className="size-6" />
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </nav>
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
};

export default Sidebar;
