import { PlusIcon } from "@/svg/PlusIcon";
import { AddRecord } from "./AddRecord";

export const Header = () => {
  return (
    <div className="container flex justify-between mt-4 items-center">
      <div className="flex gap-6">
        <PlusIcon />
        <button className="text-6 leading-4 font-[600]">Dashboard</button>
        <button className="text-6 leading-4 font-[400]">Records</button>
      </div>
      <div className="flex gap-6">
        <AddRecord />
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt=""
        />
      </div>
    </div>
  );
};
