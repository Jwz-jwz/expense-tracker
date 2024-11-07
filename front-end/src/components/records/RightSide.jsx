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

export const RightSide = ({ records, clickedCatName }) => {
  let filteredRecords = [];
  if (!clickedCatName) {
    filteredRecords = records;
  } else {
    filteredRecords = records?.filter(
      (record) => record?.name === clickedCatName
    );
  }

  const icon = {
    HomeIcon: <HomeIcon color={"#FFFFFF"} />,
    SecondIcon: <SecondIcon color={"#FFFFFF"} />,
    ThirdIcon: <ThirdIcon color={"#FFFFFF"} />,
    FourthIcon: <FourthIcon color={"#FFFFFF"} />,
    FifthIcon: <FifthIcon color={"#FFFFFF"} />,
    Sixthcon: <Sixthcon color={"#FFFFFF"} />,
    SeventhIcon: <SeventhIcon color={"#FFFFFF"} />,
    EightIcon: <EightIcon color={"#FFFFFF"} />,
    NinethIcon: <NinethIcon color={"#FFFFFF"} />,
    TenthIcon: <TenthIcon color={"#FFFFFF"} />,
    EleventhIcon: <EleventhIcon color={"#FFFFFF"} />,
    TwelfthIcon: <TwelfthIcon color={"#FFFFFF"} />,
    ThirteenthIcon: <ThirteenthIcon color={"#FFFFFF"} />,
    Fourteenth: <Fourteenth color={"#FFFFFF"} />,
    FifteenthIcon: <FifteenthIcon color={"#FFFFFF"} />,
    SixteenthIcon: <SixteenthIcon color={"#FFFFFF"} />,
    SeventeenthIcon: <SeventeenthIcon color={"#FFFFFF"} />,
    EighteenthIcon: <EighteenthIcon color={"#FFFFFF"} />,
    NineteenthIcon: <NineteenthIcon color={"#FFFFFF"} />,
    TwentiethIcon: <TwentiethIcon color={"#FFFFFF"} />,
    TwentyFirstIcon: <TwentyFirstIcon color={"#FFFFFF"} />,
    TwentySecondIcon: <TwentySecondIcon color={"#FFFFFF"} />,
    TwentyThirdIcon: <TwentyThirdIcon color={"#FFFFFF"} />,
    TwentyFourthIcon: <TwentyFourthIcon color={"#FFFFFF"} />,
    TwentyFifthIcon: <TwentyFifthIcon color={"#FFFFFF"} />,
    TwentySixthIcon: <TwentySixthIcon color={"#FFFFFF"} />,

    TwentySeventhIcon: <TwentySeventhIcon color={"#FFFFFF"} />,

    TwentyEighticon: <TwentyEighticon color={"#FFFFFF"} />,
    TwentyNinethIcon: <TwentyNinethIcon color={"#FFFFFF"} />,
    ThirtiethIcon: <ThirtiethIcon color={"#FFFFFF"} />,
  };

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
          {filteredRecords?.map((record, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px]"
              >
                <div className="flex gap-4">
                  <div
                    className="rounded-full w-10 h-10 flex justify-center items-center"
                    style={{ backgroundColor: record.icon_color }}
                  >
                    {icon[record?.category_icon]}
                  </div>
                  <div className="flex flex-col gap-1 justify-center ">
                    <p className="text-[16px] font-[400] leading-6">
                      {record.name}
                    </p>
                    <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                      {record?.time}
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
                  <p className="number">{record?.amount}₮</p>
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
