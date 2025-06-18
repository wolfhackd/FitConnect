import React from "react";
import GraphCircleCard from "@/components/GraphCircleCardStudents";
import LayoutAdmin from "@/components/LayoutAdmin";

const Dashboard = () => {
  return (
    <LayoutAdmin>
      <GraphCircleCard className="w-1/3" />
    </LayoutAdmin>
  );
};

export default Dashboard;
