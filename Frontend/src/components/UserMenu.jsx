import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { LockIcon, LogOut, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import ButtonFunctions from "./ButtonFunctions";

const UserMenu = () => {
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentDate(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    await fetch("/logout", {
      method: "POST",
      credentials: "include",
    });
    navigate("/login");
  };

  const buttons = [
    {
      icon: LockIcon,
      label: "Liberar Acesso",
      color: "bg-[#111827]",
    },
    {
      icon: LockIcon,
      label: "Liberar Acesso",
      color: "bg-[#111827]",
    },
    {
      icon: LockIcon,
      label: "Liberar Acesso",
      color: "bg-[#111827]",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm">
      {/* Botões */}
      <div className="flex items-center gap-4">
        {buttons.map((button, index) => (
          <ButtonFunctions
            key={button.label + index}
            icon={button.icon}
            label={button.label}
            color={`rounded-lg px-4 py-2 shadow-sm border text-white hover:text-[#EF4444] hover:ring-2 hover:ring-[#EF4444] transition-all duration-200 ${button.color}`}
          />
        ))}
      </div>

      {/* Data e Separador */}
      <div className="flex items-center gap-6">
        <p className="text-sm text-gray-500">{currentDate}</p>
        <Separator orientation="vertical" className="h-10 w-px bg-gray-300" />
      </div>

      {/* Avatar + Logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-gray-800 font-medium">Bem-vinda, Professor</p>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar img"
              className="rounded-full w-10 h-10"
            />
            <AvatarFallback>
              <User className="rounded-full size-10 bg-gray-200 text-gray-600" />
            </AvatarFallback>
          </Avatar>
        </div>
        <Button
          onClick={handleLogout}
          title="Logout"
          className="rounded-full size-10 bg-red-500 hover:bg-red-600 text-white p-2 cursor-pointer"
        >
          <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default UserMenu;
