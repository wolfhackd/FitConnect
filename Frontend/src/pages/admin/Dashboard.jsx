import React from "react";
import Sidebar from "@/components/Sidebar";
import UserMenu from "@/components/UserMenu";
import GraphCircleCard from "@/components/GraphCircleCardStudents";

const Dashboard = () => {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <section className="flex-1 bg-[#E5E7EB] p-8">
        <UserMenu />

        <GraphCircleCard className="w-1/3" />
      </section>
    </div>
  );
};

export default Dashboard;
