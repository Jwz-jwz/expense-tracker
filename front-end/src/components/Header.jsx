"use client";

import { PlusIcon } from "@/svg/PlusIcon";
import { AddRecord } from "./AddRecord";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = ({ dashboard, records }) => {
  const router = useRouter();
  const LogOutButton = () => {
    localStorage.clear();
    router.push("/sign-in");
  };
  return (
    <div className="w-[1200px] flex justify-between mt-5 items-center mb-5">
      <div className="flex gap-6">
        <PlusIcon />
        <Link
          href="/dashboard"
          className={`text-6 leading-4 flex items-center ${
            dashboard ? "font-[600]" : "font-[400]"
          } `}
        >
          Dashboard
        </Link>
        <Link
          href="/records"
          className={`text-6 leading-4 flex items-center ${
            records ? "font-[600]" : "font-[400]"
          }`}
        >
          Records
        </Link>
      </div>
      <div className="flex items-center gap-6">
        {/* <PlusAdd /> */}
        <div className="w-[90px] ">
          <AddRecord text={"Record"} />
        </div>
        <button onClick={LogOutButton} className="font-[600]">
          Log out
        </button>
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt=""
        />
      </div>
    </div>
  );
};
