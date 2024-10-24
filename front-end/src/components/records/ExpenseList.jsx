import { FoodIcon } from "@/svg/FoodIcon";

export const ExpenseList = () => {
  return (
    <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
      <div className="flex gap-4">
        <FoodIcon />
        <div className="flex flex-col gap">
          <p className="text-[16px] font-[400] leading-6">Food & Drinks</p>
          <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
            14:00
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
        <p>+</p>
        <p>1,000₮</p>
      </div>
    </div>
  );
};
