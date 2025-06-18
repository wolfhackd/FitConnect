import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Dumbbell, ChartArea, User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const AcademyIcon = () => {
  return (
    <div className="flex items-center p-4 rounded-md">
      <Dumbbell className="text-black size-7" />
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const icons = [
    { Icon: ChartArea, label: "Dashboard", href: "/dashboard" },
    { Icon: User, label: "Alunos", href: "/alunos" },
  ];

  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <TooltipProvider>
      <div className="bg-white p-4 h-screen w-18 flex flex-col items-center gap-6">
        <AcademyIcon />
        <nav className="flex flex-col gap-1">
          {icons.map((icon, index) => {
            const isActive = pathname.startsWith(icon.href);
            return (
              <nav key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => handleClick(icon.href)}
                      variant="ghost"
                      className={`hover:bg-gray-100 size-12 hover:text-[#EF4444] cursor-pointer ${
                        isActive ? "text-[#EF4444]" : "text-black"
                      }`}
                      aria-label={icon.label}
                    >
                      <icon.Icon className="size-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    align="center"
                    className="bg-white rounded-md p-2"
                  >
                    {icon.label}
                  </TooltipContent>
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
