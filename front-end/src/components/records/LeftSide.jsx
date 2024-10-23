import { AddRecord } from "../AddRecord";

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
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <label htmlFor="">All</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <label htmlFor="">Income</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <label htmlFor="">Expense</label>
          </div>
        </div>
      </div>
    </div>
  );
};
