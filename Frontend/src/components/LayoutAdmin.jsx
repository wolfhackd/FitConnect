import React from "react";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="flex-1 bg-[#E5E7EB] p-8">
        <UserMenu />
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;
