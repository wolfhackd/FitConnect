import { Separator } from "@/components/ui/separator";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const linkDataButtons = [
    { name: "Home", href: "/" },
    { name: "Funcionalidades", href: "/#functions" },
    { name: "Preços", href: "" },
  ];
  const contactDataButtons = [
    { name: "WhatsApp", href: "https://wa.me/55996676623" },
    { name: "E-mail", href: "mailto:email@dominio.com" },
  ];
  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/codeway__/",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/seu-usuario",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/codeway__/",
    },
    {
      name: "GitHub",
      href: "https://www.github.com/wolfhackd/",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-20 h-52 p-4">
      <div className="flex flex-col items-center justify-center">
        <h4>Links úteis</h4>
        <Separator variant={"horizontal"} />
        {linkDataButtons.map((link, index) => {
          return (
            <a href={link.href} key={index}>
              <Button variant={"link"} className={"cursor-pointer"}>
                {link.name}
              </Button>
            </a>
          );
        })}
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center">
        <h4>Contato</h4>
        <Separator variant={"horizontal"} />
        {contactDataButtons.map((link, index) => {
          return (
            <a href={link.href} key={index}>
              <Button variant={"link"} className={"cursor-pointer"}>
                {link.name}
              </Button>
            </a>
          );
        })}
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center">
        <h4>Redes sociais</h4>
        <Separator variant={"horizontal"} />
        <div className="flex justify-center gap-4">
          {socialMediaLinks.map((link, index) => {
            return (
              <a href={link.href} key={index} target="_blank">
                <Button variant={"link"} className={"cursor-pointer"}>
                  {link.name}
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
