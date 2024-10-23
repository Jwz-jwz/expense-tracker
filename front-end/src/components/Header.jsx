import { PlusIcon } from "@/svg/PlusIcon";
import { AddRecord } from "./AddRecord";

export const Header = ({ dashboard, records }) => {
  return (
    <div className="w-[1200px] flex justify-between mt-5 items-center mb-5">
      <div className="flex gap-6">
        <PlusIcon />
        <button
          className={`text-6 leading-4 ${
            dashboard ? "font-[600]" : "font-[400]"
          } `}
        >
          Dashboard
        </button>
        <button
          className={`text-6 leading-4 ${
            records ? "font-[600]" : "font-[400]"
          }`}
        >
          Records
        </button>
      </div>
      <div className="flex gap-6">
        <AddRecord text={"Record"} />
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt=""
        />
      </div>
    </div>
  );
};

// Background-color --> #F3F4F6
