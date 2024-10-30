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
import { BluePlusIcon } from "@/svg/BluePlusIcon";
import { CategoryArrow } from "@/svg/CategoryArrow";
import { useState } from "react";

export const AddCategory = () => {
  const [bgColor, setBgColor] = useState("");
  const [bgIcon, setBgIcon] = useState({});

  const handleColor = (id) => {
    return setBgColor(id);
  };
  const handleIcon = (icon) => {
    return setBgIcon(icon);
  };

  console.log("bgColor ni shuu", bgColor);

  console.log("bgIcon shuu", bgIcon);

  const colors = [
    { id: 1, color: "#0166FF" },
    { id: 2, color: "#01B3FF" },
    { id: 3, color: "#41CC00" },
    { id: 4, color: "#F9D100" },
    { id: 5, color: "#FF7B01" },
    { id: 6, color: "#AE01FF" },
    { id: 7, color: "#FFFF0101B01" },
  ];
  const icons = [
    { name: "HomeIcon", icon: <HomeIcon color={"#343330"} /> },
    { name: "SecondIcon", icon: <SecondIcon color={"#343330"} /> },
    { name: "ThirdIcon", icon: <ThirdIcon color={"#343330"} /> },
    { name: "FourthIcon", icon: <FourthIcon color={"#343330"} /> },
    { name: "FifthIcon", icon: <FifthIcon color={"#343330"} /> },
    { name: "Sixthcon", icon: <Sixthcon color={"#343330"} /> },
    { name: "SeventhIcon", icon: <SeventhIcon color={"#343330"} /> },
    { name: "EightIcon", icon: <EightIcon color={"#343330"} /> },
    { name: "NinethIcon", icon: <NinethIcon color={"#343330"} /> },
    { name: "TenthIcon", icon: <TenthIcon color={"#343330"} /> },
    { name: "EleventhIcon", icon: <EleventhIcon color={"#343330"} /> },
    { name: "TwelfthIcon", icon: <TwelfthIcon color={"#343330"} /> },
    { name: "ThirteenthIcon", icon: <ThirteenthIcon color={"#343330"} /> },
    { name: "Fourteenth", icon: <Fourteenth color={"#343330"} /> },
    { name: "FifteenthIcon", icon: <FifteenthIcon color={"#343330"} /> },
    { name: "SixteenthIcon", icon: <SixteenthIcon color={"#343330"} /> },
    { name: "SeventeenthIcon", icon: <SeventeenthIcon color={"#343330"} /> },
    { name: "EighteenthIcon", icon: <EighteenthIcon color={"#343330"} /> },
    { name: "NineteenthIcon", icon: <NineteenthIcon color={"#343330"} /> },
    { name: "TwentiethIcon", icon: <TwentiethIcon color={"#343330"} /> },
    { name: "TwentyFirstIcon", icon: <TwentyFirstIcon color={"#343330"} /> },
    { name: "TwentySecondIcon", icon: <TwentySecondIcon color={"#343330"} /> },
    { name: "TwentyThirdIcon", icon: <TwentyThirdIcon color={"#343330"} /> },
    { name: "TwentyFourthIcon", icon: <TwentyFourthIcon color={"#343330"} /> },
    { name: "TwentyFifthIcon", icon: <TwentyFifthIcon color={"#343330"} /> },
    { name: "TwentySixthIcon", icon: <TwentySixthIcon color={"#343330"} /> },
    {
      name: "TwentySeventhIcon",
      icon: <TwentySeventhIcon color={"#343330"} />,
    },
    { name: "TwentyEighticon", icon: <TwentyEighticon color={"#343330"} /> },
    { name: "TwentyNinethIcon", icon: <TwentyNinethIcon color={"#343330"} /> },
    { name: "ThirtiethIcon", icon: <ThirtiethIcon color={"#343330"} /> },
  ];

  return (
    <div>
      <button
        className="btn rounded-none bg-white border-none text-[16px] font-[400] leading-6 shadow-none"
        onClick={() => document.getElementById("add_category").showModal()}
      >
        <BluePlusIcon />
        Add Category
      </button>
      <dialog id="add_category" className="modal ">
        <div className="bg-white rounded-[12px]">
          <div className="flex justify-between border-b border-b-[#E2E8F0] py-[24px] px-[20px]">
            <h3 className="font-bold text-lg">Add Category</h3>
            <form method="dialog">
              <button className="top-1">✕</button>
            </form>
          </div>
          <div className="py-[24px] px-[20px] flex flex-col gap-8">
            <div className="flex justify-between w-[446px]">
              <div>
                <button
                  className="btn bg-[#F3F4F6] border border-[#D1D5DB] flex justify-between"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <HomeIcon />
                  <CategoryArrow />
                </button>
                <dialog
                  id="my_modal_2"
                  className="top-[196px] left-[-70px] p-[24px] modal"
                >
                  <div className=" w-[312px] modal-box flex flex-col gap-6">
                    <div className="grid grid-cols-6 grid-rows-5 gap-6 ">
                      {icons.map((icon, index) => {
                        return (
                          <button
                            onClick={() => {
                              handleIcon(icon.name);
                            }}
                            key={index}
                          >
                            {icon.icon}
                          </button>
                        );
                      })}
                    </div>
                    <p className="border-b border-b-[#E2E8F0] w-full"></p>
                    <div className="grid grid-cols-7 gap-4">
                      {colors.map((color, index) => {
                        return (
                          <button
                            onClick={() => {
                              handleColor(color.id);
                            }}
                            key={index}
                            className={`w-[24px] h-[24px] bg-[${color.color}]`}
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-[350px] bg-[#F3F4F6]"
              />
            </div>
            <button className="w-ful bg-[#16A34A] text-white rounded-[24px] py-[10px]">
              Add
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
