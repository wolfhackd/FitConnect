import React from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { List, Pencil, Trash2 } from "lucide-react";

const TrainGroup = ({ name, status }) => {
  //Tenho que colocar um onClick para mudar o estado do treinamento junto a uma função para mandar para o banco
  return (
    <div className="border-2 border-gray-200">
      <div className="flex justify-between items-center p-2">
        <div className="flex gap-2">
          <List />
          <span>{name || "---"}</span>
        </div>
        <div className="flex items-center">
          <Switch
            className={"cursor-pointer data-[state=checked]:bg-[#EF4444]"}
            checked={status}
          />
          <Button variant={"ghost"} className={"cursor-pointer"}>
            <Pencil />
          </Button>
          {status != true ? (
            <Button variant={"ghost"} className={"cursor-pointer"}>
              <Trash2 />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainGroup;
