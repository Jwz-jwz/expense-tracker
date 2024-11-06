import { FoodIcon } from "@/svg/FoodIcon";
import { HomeIcon } from "@/svg/HomeIcon";
import { LeftSideicon } from "@/svg/LeftSideIcon";
import { RightSideIcon } from "@/svg/RightSideIcon";
import { isToday } from "date-fns";

export const RightSide = ({ records, colors, icons, category }) => {
  // const filteredArray = records
  //   ?.filter((rec) =>
  //     category?.some((cat) => {
  //       if (cat?.id == rec?.category_id) {
  //         const newarray = {
  //           recAmount: rec.amount,
  //           recTime: rec.time,
  //           recDate: rec.date,
  //           transaction_type: rec.transaction_type,
  //           iconColor: cat.icon_color,
  //           catName: cat.name,
  //           catIcon: cat.category_icon,
  //         };
  //         return newarray;
  //         // console.log(newarray);
  //       }
  //     })
  //   )
  //   .map((newcat) => {
  //     newcat;
  //   });

  const filteredArray = records
    ?.filter((rec) => category?.some((cat) => cat?.id === rec?.category_id))
    .map((rec) => {
      // Find the category for this record
      const cat = category.find((cat) => cat?.id === rec?.category_id);

      if (cat) {
        // Return the transformed object
        return {
          recAmount: rec.amount,
          recTime: rec.time,
          recDate: rec.date,
          transaction_type: rec.transaction_type,
          iconColor: cat.icon_color,
          catName: cat.name,
          catIcon: cat.category_icon,
        };
      }
    });

  console.log("new filtered array", filteredArray);

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
          {filteredArray?.map((array, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px]"
              >
                <div className="flex gap-4">
                  <div
                    className="rounded-full w-10 h-10"
                    style={{ backgroundColor: array.iconColor }}
                  >
                    {icons?.find((icon) => {
                      icon?.name === array?.catIcon;
                    })}
                  </div>
                  <div className="flex flex-col gap-1 justify-center ">
                    <p className="text-[16px] font-[400] leading-6">
                      {array.catName}
                    </p>
                    <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                      {array?.recTime}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    array?.transaction_type == "INC"
                      ? "text-[#84CC16]"
                      : "text-[red]"
                  }  text-[16px] font-[600] leading-6`}
                >
                  {/* <p>+</p> */}
                  <p>{array.transaction_type == "INC" ? "+" : "-"}</p>
                  <p className="number">{array?.recAmount}₮</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[16px] font-[600] leading-6 ">Yesterday</h1>
        </div>
      </div>
    </div>
  );
};
