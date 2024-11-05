"use client";
import {
  EighteenthIcon,
  EightIcon,
  EleventhIcon,
  FifteenthIcon,
  FifthIcon,
  Fourteenth,
  FourthIcon,
  HomeIcon,
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

import { Header } from "@/components/Header";
import { LeftSide } from "@/components/records/LeftSide";
import { RightSide } from "@/components/records/RightSide";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export const Records = () => {
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/category`);
      const data = await response.json();
      setCategory(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(category);

  useEffect(() => {
    fetchCategories();
  }, []);

  const colors = [
    { id: 1, color: "#0166FF" },
    { id: 2, color: "#01B3FF" },
    { id: 3, color: "#41CC00" },
    { id: 4, color: "#F9D100" },
    { id: 5, color: "#FF7B01" },
    { id: 6, color: "#AE01FF" },
    { id: 7, color: "#FF0101" },
  ];

  const icons = [
    { name: "HomeIcon", icon: <HomeIcon /> },
    { name: "SecondIcon", icon: <SecondIcon /> },
    { name: "ThirdIcon", icon: <ThirdIcon /> },
    { name: "FourthIcon", icon: <FourthIcon /> },
    { name: "FifthIcon", icon: <FifthIcon /> },
    { name: "Sixthcon", icon: <Sixthcon /> },
    { name: "SeventhIcon", icon: <SeventhIcon /> },
    { name: "EightIcon", icon: <EightIcon /> },
    { name: "NinethIcon", icon: <NinethIcon /> },
    { name: "TenthIcon", icon: <TenthIcon /> },
    { name: "EleventhIcon", icon: <EleventhIcon /> },
    { name: "TwelfthIcon", icon: <TwelfthIcon /> },
    { name: "ThirteenthIcon", icon: <ThirteenthIcon /> },
    { name: "Fourteenth", icon: <Fourteenth /> },
    { name: "FifteenthIcon", icon: <FifteenthIcon /> },
    { name: "SixteenthIcon", icon: <SixteenthIcon /> },
    { name: "SeventeenthIcon", icon: <SeventeenthIcon /> },
    { name: "EighteenthIcon", icon: <EighteenthIcon /> },
    { name: "NineteenthIcon", icon: <NineteenthIcon /> },
    { name: "TwentiethIcon", icon: <TwentiethIcon /> },
    { name: "TwentyFirstIcon", icon: <TwentyFirstIcon /> },
    { name: "TwentySecondIcon", icon: <TwentySecondIcon /> },
    { name: "TwentyThirdIcon", icon: <TwentyThirdIcon /> },
    { name: "TwentyFourthIcon", icon: <TwentyFourthIcon /> },
    { name: "TwentyFifthIcon", icon: <TwentyFifthIcon /> },
    { name: "TwentySixthIcon", icon: <TwentySixthIcon /> },
    {
      name: "TwentySeventhIcon",
      icon: <TwentySeventhIcon />,
    },
    { name: "TwentyEighticon", icon: <TwentyEighticon /> },
    { name: "TwentyNinethIcon", icon: <TwentyNinethIcon /> },
    { name: "ThirtiethIcon", icon: <ThirtiethIcon /> },
  ];

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Header dashboard={false} records={true} />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#F3F4F6] pb-[40px]">
        <div className="w-[1200px] flex gap-6">
          <LeftSide
            categories={category}
            colors={colors}
            icons={icons}
            setCategory={setCategory}
          />
          <RightSide />
        </div>
      </div>
    </div>
  );
};
