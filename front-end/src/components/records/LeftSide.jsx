"use client";

import { EyeIcon } from "@/svg/EyeIcon";
import { AddRecord } from "../AddRecord";
import { AddCategory } from "./AddCategory";
import { BluePlusIcon } from "@/svg/BluePlusIcon";

export const LeftSide = () => {
  return (
    <div className="w-[282px] h-[912px] rounded-xl border border-[#E5E7EB] mt-[40px] bg-white px-4 py-6 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-[600] leading-8">Records</h1>
        <AddRecord text={"Add"} />
      </div>
      <input
        className="border border-[#D1D5DB] rounded-lg bg-[#F3F4F6] px-4 py-1"
        type="text"
        placeholder="Search"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-[600] leading-6 ">Types</h1>
        <div className="flex flex-col gap-1 ml-[20px]">
          <div className="flex gap-[15px]">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              defaultChecked
            />
            <label htmlFor="radio">All</label>
          </div>
          <div className="flex gap-[15px]">
            <input type="radio" name="radio-1" className="radio" />
            <label htmlFor="radio">Income</label>
          </div>
          <div className="flex gap-[15px]">
            <input type="radio" name="radio-1" className="radio" />
            <label htmlFor="radio">Expense</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-[16px] font-[600] leading-6">Category</h1>
          <button className="text-[#1F2937] text-[16px] font-[400] leading-6">
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-[8px] pl-3">
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Food & Drinks</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Shopping</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Housing</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Transportation</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Vehicle</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">
              Life & Entertainment
            </p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">
              Communication, PC
            </p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">
              Financial expenses
            </p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Investments</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Income</p>
          </div>
          <div className="flex gap-[10px]">
            <EyeIcon />
            <p className="text-[16px] font-[400] leading-6">Other</p>
          </div>
        </div>
        <div className="flex items-center ">
          <AddCategory />
        </div>
      </div>
    </div>
  );
};
