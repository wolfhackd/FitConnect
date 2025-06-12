import React from "react";
import Sidebar from "@/components/Sidebar";
import UserMenu from "@/components/UserMenu";

const Dashboard = () => {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <section className="flex-1 bg-[#E5E7EB] p-6">
        <UserMenu />
      </section>
    </div>
  );
};

export default Dashboard;
