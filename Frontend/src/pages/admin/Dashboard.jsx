import React from "react";
import Sidebar from "@/components/Sidebar";
import UserMenu from "@/components/UserMenu";
import ButtonFunctions from "@/components/ButtonFunctions";
import OnlineRequestsCard from "@/components/OnlineRequestsCard";

const Dashboard = () => {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <section className="flex-1 bg-[#E5E7EB] p-8">
        <UserMenu />

        <OnlineRequestsCard className="w-1/3" />
      </section>
    </div>
  );
};

export default Dashboard;
