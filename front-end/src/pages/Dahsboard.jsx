"use client";

import { ChartHero } from "@/components/dashboard/DoughnutChart";
import { HeroDashboard } from "@/components/dashboard/HeroDashboard";
import { Lastrecord } from "@/components/dashboard/LastRecord";
import { Header } from "@/components/Header";

export const Dashboard = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Header dashboard={true} records={false} />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#F3F4F6] gap-6 pb-[40px]">
        <HeroDashboard />
        <ChartHero />
        <Lastrecord />
      </div>
    </div>
  );
};
