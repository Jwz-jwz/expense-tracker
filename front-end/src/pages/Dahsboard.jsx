"use client";

import { ChartHero } from "@/components/dashboard/DoughnutChart";
import { HeroDashboard } from "@/components/dashboard/HeroDashboard";
import { Lastrecord } from "@/components/dashboard/LastRecord";
import { Header } from "@/components/Header";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [dashboardRecords, setDashboardRecords] = useState([]);

  const fetchDashboardRecords = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/dashboard`);
      const data = await response.json();
      setDashboardRecords(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboardRecords();
  }, []);
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Header dashboard={true} records={false} />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#F3F4F6] gap-6 pb-[40px]">
        <HeroDashboard />
        <ChartHero dashboardRecords={dashboardRecords} />
        <Lastrecord dashboardRecords={dashboardRecords} />
      </div>
    </div>
  );
};
