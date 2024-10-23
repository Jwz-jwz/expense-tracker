import { Header } from "@/components/Header";
import { LeftSide } from "@/components/records/LeftSide";

export const Records = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Header dashboard={false} records={true} />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#F3F4F6] pb-[40px]">
        <div className="w-[1200px] flex gap-6">
          <LeftSide />
        </div>
      </div>
    </div>
  );
};
