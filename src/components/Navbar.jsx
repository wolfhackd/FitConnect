import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openLinks } from "@/utils/openLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navBarFunctions = [
    { label: "Sobre", link: "#about" },
    { label: "Serviços", link: "#functions" },
    { label: "Contato", link: "#footer" },
  ];

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
        {/* Menu Smartphone */}
        {isOpen && (
          <div className="flex flex-col gap-6 fixed top-10 h-screen w-screen pt-6 bg-[#1F2937]">
            {/* tenho que adicionar os links */}
            {navBarFunctions.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant={"link"}
                  size={"sm"}
                  className={"text-white"}
                  onClick={() => {
                    openLinks(item.link);
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant={"destructive"}
              className={"cursor-pointer"}
              onClick={() => {
                // adicionar pagina de login
                // openLinks("/login", true);
                openLinks("/login", true);
              }}
            >
              Login
            </Button>
          </div>
        )}
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center md:justify-between lg:justify-center gap-6 pr-2 w-2/4">
          {navBarFunctions.map((item, index) => {
            return (
              <Button
                key={index}
                variant={"link"}
                className={"text-white cursor-pointer text-xl"}
                onClick={() => {
                  openLinks(item.link);
                }}
              >
                {item.label}
              </Button>
            );
          })}
          <Button
            variant={"destructive"}
            className={"cursor-pointer"}
            onClick={() => {
              // adicionar pagina de login
              // openLinks("/login", true);
              openLinks("/login", true);
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
