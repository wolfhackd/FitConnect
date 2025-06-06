import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-1/16 justify-between w-full items-center bg-[#1F2937] transition-all duration-300 md:text-3xl">
        <h4 className="font-bold text-white p-3 md:p-8">FITCONNECT</h4>
        <Button
          variant="secondary"
          size="icon"
          className="size-8 bg-[#1F2937] text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <AlignJustify /> : <X />}
        </Button>
        {isOpen && (
          <div className="flex flex-col gap-6 fixed top-10 h-screen w-screen pt-6 bg-[#1F2937]">
            {/* tenho que adicionar os links */}
            <Button variant={"link"} size={"sm"} className={" text-white"}>
              Sobre
            </Button>
            <Button variant={"link"} size={"sm"} className={" text-white"}>
              Benefícios
            </Button>
            <Button variant={"link"} size={"sm"} className={" text-white"}>
              Contato
            </Button>
          </div>
        )}
        <div className="hidden md:flex items-center md:justify-between lg:justify-center gap-6 pr-2 w-2/4">
          <Button
            variant={"link"}
            className={"text-white cursor-pointer text-xl"}
          >
            Sobre
          </Button>
          <Button
            variant={"link"}
            className={"text-white cursor-pointer text-xl"}
          >
            Benefícios
          </Button>
          <Button
            variant={"link"}
            className={"text-white cursor-pointer text-xl"}
          >
            Contato
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
