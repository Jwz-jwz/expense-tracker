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
  const [records, setRecords] = useState([]);
  const [transactionType, setTransactionType] = useState("ALL");
  const [ongo, setOngo] = useState("#343330");
  const [clickedCatName, setClickedCatName] = useState("");
  const [isClicked, setIsClicked] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/category`);
      const data = await response.json();
      setCategory(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecords = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/transaction?transactionType=${transactionType}`
      );
      const data = await response.json();
      setRecords(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const transactType = (value) => {
    setTransactionType(value);
  };
  const handleIcon = (name) => {
    setClickedCatName((prevName) => [...prevName, name]);
  };
  console.log(clickedCatName);

  const handleClearButton = () => {
    setClickedCatName(!isClicked);
    setClickedCatName("");
  };

  useEffect(() => {
    fetchCategories();
    fetchRecords();
  }, [transactionType]);

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
    { name: "HomeIcon", icon: <HomeIcon color={ongo} /> },
    { name: "SecondIcon", icon: <SecondIcon color={ongo} /> },
    { name: "ThirdIcon", icon: <ThirdIcon color={ongo} /> },
    { name: "FourthIcon", icon: <FourthIcon color={ongo} /> },
    { name: "FifthIcon", icon: <FifthIcon color={ongo} /> },
    { name: "Sixthcon", icon: <Sixthcon color={ongo} /> },
    { name: "SeventhIcon", icon: <SeventhIcon color={ongo} /> },
    { name: "EightIcon", icon: <EightIcon color={ongo} /> },
    { name: "NinethIcon", icon: <NinethIcon color={ongo} /> },
    { name: "TenthIcon", icon: <TenthIcon color={ongo} /> },
    { name: "EleventhIcon", icon: <EleventhIcon color={ongo} /> },
    { name: "ThirteenthIcon", icon: <ThirteenthIcon color={ongo} /> },
    { name: "Fourteenth", icon: <Fourteenth color={ongo} /> },
    { name: "FifteenthIcon", icon: <FifteenthIcon color={ongo} /> },
    { name: "SixteenthIcon", icon: <SixteenthIcon color={ongo} /> },
    { name: "SeventeenthIcon", icon: <SeventeenthIcon color={ongo} /> },
    { name: "EighteenthIcon", icon: <EighteenthIcon color={ongo} /> },
    { name: "NineteenthIcon", icon: <NineteenthIcon color={ongo} /> },
    { name: "TwentiethIcon", icon: <TwentiethIcon color={ongo} /> },
    { name: "TwentyFirstIcon", icon: <TwentyFirstIcon color={ongo} /> },
    { name: "TwentySecondIcon", icon: <TwentySecondIcon color={ongo} /> },
    { name: "TwentyThirdIcon", icon: <TwentyThirdIcon color={ongo} /> },
    { name: "TwentyFourthIcon", icon: <TwentyFourthIcon color={ongo} /> },
    { name: "TwentyFifthIcon", icon: <TwentyFifthIcon color={ongo} /> },
    { name: "TwentySixthIcon", icon: <TwentySixthIcon color={ongo} /> },
    {
      name: "TwentySeventhIcon",
      icon: <TwentySeventhIcon color={ongo} />,
    },
    { name: "TwentyEighticon", icon: <TwentyEighticon color={ongo} /> },
    { name: "TwentyNinethIcon", icon: <TwentyNinethIcon color={ongo} /> },
    { name: "ThirtiethIcon", icon: <ThirtiethIcon color={ongo} /> },
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
            setRecords={setRecords}
            transactType={transactType}
            setOngo={setOngo}
            handleIcon={handleIcon}
            clickedCatName={clickedCatName}
            handleClearButton={handleClearButton}
          />
          <RightSide
            category={category}
            records={records}
            clickedCatName={clickedCatName}
          />
        </div>
      </div>
    </div>
  );
};
