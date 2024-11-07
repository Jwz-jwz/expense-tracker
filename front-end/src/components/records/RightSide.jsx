import {
  EighteenthIcon,
  EightIcon,
  EleventhIcon,
  FifteenthIcon,
  FifthIcon,
  Fourteenth,
  FourthIcon,
  NineteenthIcon,
  NinethIcon,
  SecondIcon,
  SeventeenthIcon,
  SeventhIcon,
  SixteenthIcon,
  Sixthcon,
  TenthIcon,
  ThirdIcon,
  ThirteenthIcon,
  ThirtiethIcon,
  TwelfthIcon,
  TwentiethIcon,
  TwentyEighticon,
  TwentyFifthIcon,
  TwentyFirstIcon,
  TwentyFourthIcon,
  TwentyNinethIcon,
  TwentySecondIcon,
  TwentySeventhIcon,
  TwentySixthIcon,
  TwentyThirdIcon,
} from "@/svg";

import { HomeIcon } from "@/svg/HomeIcon";
import { LeftSideicon } from "@/svg/LeftSideIcon";
import { RightSideIcon } from "@/svg/RightSideIcon";

export const RightSide = ({ records, category, transactionType }) => {
  const filteredArray = records
    ?.filter((rec) => category?.some((cat) => cat?.id === rec?.category_id))
    .map((rec) => {
      const cat = category.find((cat) => cat?.id === rec?.category_id);

      if (cat) {
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

  // const incomeTypeArray = filteredArray.filter(
  //   (array) => array.transaction_type === "INC"
  // );
  // const expenseTypeArray = filteredArray.filter(
  //   (array) => array.transaction_type === "EXP"
  // );

  // console.log("new filtered array", filteredArray);
  const icon = {
    HomeIcon: <HomeIcon />,
    SecondIcon: <SecondIcon />,
    ThirdIcon: <ThirdIcon />,
    FourthIcon: <FourthIcon />,
    FifthIcon: <FifthIcon />,
    Sixthcon: <Sixthcon />,
    SeventhIcon: <SeventhIcon />,
    EightIcon: <EightIcon />,
    NinethIcon: <NinethIcon />,
    TenthIcon: <TenthIcon />,
    EleventhIcon: <EleventhIcon />,
    TwelfthIcon: <TwelfthIcon />,
    ThirteenthIcon: <ThirteenthIcon />,
    Fourteenth: <Fourteenth />,
    FifteenthIcon: <FifteenthIcon />,
    SixteenthIcon: <SixteenthIcon />,
    SeventeenthIcon: <SeventeenthIcon />,
    EighteenthIcon: <EighteenthIcon />,
    NineteenthIcon: <NineteenthIcon />,
    TwentiethIcon: <TwentiethIcon />,
    TwentyFirstIcon: <TwentyFirstIcon />,
    TwentySecondIcon: <TwentySecondIcon />,
    TwentyThirdIcon: <TwentyThirdIcon />,
    TwentyFourthIcon: <TwentyFourthIcon />,
    TwentyFifthIcon: <TwentyFifthIcon />,
    TwentySixthIcon: <TwentySixthIcon />,

    TwentySeventhIcon: <TwentySeventhIcon />,

    TwentyEighticon: <TwentyEighticon />,
    TwentyNinethIcon: <TwentyNinethIcon />,
    ThirtiethIcon: <ThirtiethIcon />,
  };

  // console.log(icons["HomeIcon"]);

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
          {filteredArray?.map((record, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px]"
              >
                <div className="flex gap-4">
                  <div
                    className="rounded-full w-10 h-10 flex justify-center items-center"
                    style={{ backgroundColor: record.iconColor }}
                  >
                    {icon[record?.catIcon]}
                  </div>
                  <div className="flex flex-col gap-1 justify-center ">
                    <p className="text-[16px] font-[400] leading-6">
                      {record.catName}
                    </p>
                    <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                      {record?.recTime}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    record?.transaction_type == "INC"
                      ? "text-[#84CC16]"
                      : "text-[red]"
                  }  text-[16px] font-[600] leading-6`}
                >
                  {/* <p>+</p> */}
                  <p>{record.transaction_type == "INC" ? "+" : "-"}</p>
                  <p className="number">{record?.recAmount}₮</p>
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
