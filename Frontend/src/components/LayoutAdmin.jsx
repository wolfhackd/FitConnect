import React from "react";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex w-full overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 bg-[#E5E7EB] p-8">
        <UserMenu />
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;
