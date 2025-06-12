import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { LogOut, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const UserMenu = () => {
  const [currentDate, setCurrentDate] = useState("");

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
  return (
    <div className="flex items-center justify-around w-full bg-white p-4">
      <p className=" w-full">Overview</p>
      <Separator
        orientation="vertical"
        className="mx-4 w-px h-12 bg-gray-300"
      />
      <div className=" w-full">
        <p>{currentDate}</p>
      </div>
      <Separator
        orientation="vertical"
        className="mx-4 w-px h-12 bg-gray-300"
      />
      <div className="flex items-center justify-around w-full">
        <p>Bem vindo Maysa.</p>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Avatar img"
            className="rounded-full w-10 h-10"
          />
          <AvatarFallback>
            <User
              alt="Avatar img"
              className="rounded-full size-10 bg-[#EF4444] "
            />
          </AvatarFallback>
        </Avatar>
        <Button
          title="Logout"
          className={"rounded-full size-10 bg-[#EF4444] cursor-pointer"}
        >
          <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default UserMenu;
