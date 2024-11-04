"use client";

import { EyeIcon } from "@/svg/EyeIcon";
import { PlusAdd } from "./PlusAdd";
import { AddRecord } from "../AddRecord";
import { AddCategory } from "./AddCategory";

export const LeftSide = ({ categories, colors, icons }) => {
  console.log(categories);

  return (
    <div className="w-[282px] h-[912px] rounded-xl border border-[#E5E7EB] mt-8 bg-white px-4 py-6 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-[600] leading-8">Records</h1>
        <AddRecord categories={categories} colors={colors} icons={icons} />
        {/* <PlusAdd /> */}
      </div>
      <input
        className="border border-[#D1D5DB] rounded-lg bg-[#F3F4F6] px-4 py-1"
        type="text"
        placeholder="Search"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-[600] leading-6 ">Types</h1>
        <div className="flex flex-col gap-1 ml-[20px]">
          <div className="flex gap-[15px] items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
              defaultChecked
            />
            <label htmlFor="radio">All</label>
          </div>
          <div className="flex gap-[15px] items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
            />
            <label htmlFor="radio">Income</label>
          </div>
          <div className="flex gap-[15px] items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
            />
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
          {categories &&
            categories.map((category, id) => {
              return (
                <div key={id} className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    {category.name}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="flex items-center ">
          <AddCategory colors={colors} icons={icons} />
        </div>
      </div>
    </div>
  );
};
