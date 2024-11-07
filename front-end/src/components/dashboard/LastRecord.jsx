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

export const Lastrecord = ({ dashboardRecords }) => {
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
  const currentDate = new Date().toDateString();
  console.log(currentDate);

  return (
    <div className="w-[1200px] bg-white rounded-xl px-6">
      <p className="py-4 text-[16px] font-[600] leading-[24px] border-b border-b-[#E2E8F0]">
        Last Records
      </p>
      {dashboardRecords?.map((record, index) => {
        return (
          <div
            key={index}
            className="flex justify-between py-5 border-b border-b-[#E2E8F0]"
          >
            <div className="flex gap-4">
              <div
                className="rounded-full w-10 h-10 flex justify-center items-center"
                style={{ backgroundColor: record.icon_color }}
              >
                {icon[record?.category_icon]}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[400] leading-6">
                  {record?.name}
                </p>
                <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                  {record?.date}
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
              <p>{record?.transaction_type == "INC" ? "+" : "-"}</p>
              <p>{record?.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
