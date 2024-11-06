import { FoodIcon } from "@/svg/FoodIcon";
import { HomeIcon } from "@/svg/HomeIcon";
import { LeftSideicon } from "@/svg/LeftSideIcon";
import { RightSideIcon } from "@/svg/RightSideIcon";
import { ExpenseList } from "./ExpenseList";

export const RightSide = ({ records, colors, icons, category }) => {
  console.log(records);
  // console.log(category);
  const filteredArray = category
    .filter((cat) => records.some((rec) => rec.category_id == cat.id))
    .map((item) => ({
      categoryName: item.name,
      categoryIcon: item.category_icon,
      categoryColor: item.icon_color,
    }));
  console.log(filteredArray);

  return (
    <div className="w-full flex flex-col gap-4 mt-8">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <LeftSideicon />
          <p className="text-[16px] font-[400] leading-6">Last 30 Days</p>
          <RightSideIcon />
        </div>
        <select className="select select-bordered w-[180px] h-[48px] rounded-lg text-[16px] leading-6 font-[600]">
          <option>Newest first</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-[16px] font-[600] leading-6 ">Today</h1>
          {records?.map((record) => {
            return (
              <div
                key={record.id}
                className="flex justify-between px-6 py-4 bg-white rounded-[12px]"
              >
                <div className="flex gap-4">
                  <HomeIcon />
                  <div className="flex flex-col gap">
                    <p className="text-[16px] font-[400] leading-6">
                      {filteredArray.map((filter) => filter.categoryName)}
                    </p>
                    <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                      {record?.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#84CC16] text-[16px] font-[600] leading-6">
                  <p>+</p>
                  <p>{record?.amount}</p>
                </div>
              </div>
            );
          })}
          {/* <ExpenseList />
          <ExpenseList />
          <ExpenseList />
          <ExpenseList /> */}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[16px] font-[600] leading-6 ">Yesterday</h1>
          {/* <ExpenseList />
          <ExpenseList />
          <ExpenseList />
          <ExpenseList />
          <ExpenseList /> */}
        </div>
      </div>
    </div>
  );
};
