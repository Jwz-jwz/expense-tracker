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
import { useEffect, useState } from "react";
import { IconArrow } from "./IconArrow";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import Home from "@/app/page";

export const AddCategory = () => {
  const [bgColor, setBgColor] = useState("#343330");
  const [bgIcon, setBgIcon] = useState(<HomeIcon color={bgColor} />);
  const [categoryName, setCategoryName] = useState("");
  const [newCategory, setNewCategory] = useState([]);
  const [defCategory, setDefCategory] = useState([bgIcon]);
  console.log(newCategory);
  console.log(defCategory);

  const handleColor = (color) => {
    return setBgColor(color);
  };
  console.log(bgColor);

  const handleIcon = (iconName) => {
    return setBgIcon(iconName);
  };
  console.log(bgIcon);

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };
  console.log(categoryName);

  const addCategory = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ categoryName, bgIcon, bgColor }),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/category`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setDefCategory(data);
      setNewCategory((prevCategory) => [...prevCategory, data]);
    } catch (error) {
      console.log("error");
    }
  };

  // const fetchCategores = async () => {
  //   const response = await fetch(`${BACKEND_ENDPOINT}/category`);
  //   const data = await response.json();

  //   setNewCategory((prevCategory) => [...prevCategory, data]);
  // };

  // useEffect(() => {}, []);

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
    { name: "HomeIcon", icon: <HomeIcon color={bgColor} /> },
    { name: "SecondIcon", icon: <SecondIcon color={bgColor} /> },
    { name: "ThirdIcon", icon: <ThirdIcon color={bgColor} /> },
    { name: "FourthIcon", icon: <FourthIcon color={bgColor} /> },
    { name: "FifthIcon", icon: <FifthIcon color={bgColor} /> },
    { name: "Sixthcon", icon: <Sixthcon color={bgColor} /> },
    { name: "SeventhIcon", icon: <SeventhIcon color={bgColor} /> },
    { name: "EightIcon", icon: <EightIcon color={bgColor} /> },
    { name: "NinethIcon", icon: <NinethIcon color={bgColor} /> },
    { name: "TenthIcon", icon: <TenthIcon color={bgColor} /> },
    { name: "EleventhIcon", icon: <EleventhIcon color={bgColor} /> },
    { name: "TwelfthIcon", icon: <TwelfthIcon color={bgColor} /> },
    { name: "ThirteenthIcon", icon: <ThirteenthIcon color={bgColor} /> },
    { name: "Fourteenth", icon: <Fourteenth color={bgColor} /> },
    { name: "FifteenthIcon", icon: <FifteenthIcon color={bgColor} /> },
    { name: "SixteenthIcon", icon: <SixteenthIcon color={bgColor} /> },
    { name: "SeventeenthIcon", icon: <SeventeenthIcon color={bgColor} /> },
    { name: "EighteenthIcon", icon: <EighteenthIcon color={bgColor} /> },
    { name: "NineteenthIcon", icon: <NineteenthIcon color={bgColor} /> },
    { name: "TwentiethIcon", icon: <TwentiethIcon color={bgColor} /> },
    { name: "TwentyFirstIcon", icon: <TwentyFirstIcon color={bgColor} /> },
    { name: "TwentySecondIcon", icon: <TwentySecondIcon color={bgColor} /> },
    { name: "TwentyThirdIcon", icon: <TwentyThirdIcon color={bgColor} /> },
    { name: "TwentyFourthIcon", icon: <TwentyFourthIcon color={bgColor} /> },
    { name: "TwentyFifthIcon", icon: <TwentyFifthIcon color={bgColor} /> },
    { name: "TwentySixthIcon", icon: <TwentySixthIcon color={bgColor} /> },
    {
      name: "TwentySeventhIcon",
      icon: <TwentySeventhIcon color={bgColor} />,
    },
    { name: "TwentyEighticon", icon: <TwentyEighticon color={bgColor} /> },
    { name: "TwentyNinethIcon", icon: <TwentyNinethIcon color={bgColor} /> },
    { name: "ThirtiethIcon", icon: <ThirtiethIcon color={bgColor} /> },
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
                  {/* <IconArrow icon={defCategory} /> */}
                  <div>{defCategory[0]}</div>
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
                              handleIcon(icon?.name);
                            }}
                            key={index}
                          >
                            {icon?.icon}
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
                              handleColor(color?.color);
                            }}
                            key={index}
                            className={`w-8 h-8 rounded-full bg-[${color?.color}]`}
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
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                className="input input-bordered w-[350px] bg-[#F3F4F6]"
              />
            </div>
            <button>
              {newCategory.map((category, index) => {
                console.log("new category", category);

                return (
                  <div key={index} className="flex gap-[20px]">
                    <div className="flex">{category?.name}</div>
                  </div>
                );
              })}
            </button>
            <button
              onClick={addCategory}
              className="w-ful bg-[#16A34A] text-white rounded-[24px] py-[10px]"
            >
              Add
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
