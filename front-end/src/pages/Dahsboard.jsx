import { HeroDashboard } from "@/components/dashboard/Hero";
import { Header } from "@/components/Header";
import { WhiteLogo } from "@/svg/WhiteLogo";

export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      {/* <div
        style={{
          backgroundImage: `url(bgcard.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[384px] h-[216px] bg-[#0166FF] mt-[50px] rounded-[18px] flex justify-between"
      >
        <div className="mt-8 ml-8">
          <WhiteLogo />
          <div className="mt-[66px]">
            <p>Cash</p>
            <p className="te-white text-[24px] font-[600] leading-8">
              10,000,000,000
            </p>
          </div>
        </div>
      </div> */}
      <HeroDashboard />
    </div>
  );
};
