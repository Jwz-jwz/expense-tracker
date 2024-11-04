import {
  EightIcon,
  EleventhIcon,
  FifteenthIcon,
  FifthIcon,
  Fourteenth,
  FourthIcon,
  HomeIcon,
  NinethIcon,
  SecondIcon,
  SeventhIcon,
  Sixthcon,
  TenthIcon,
  ThirdIcon,
  ThirteenthIcon,
  TwelfthIcon,
} from "@/svg";
import { BluePlusIcon } from "@/svg/BluePlusIcon";
import { CategoryArrow } from "@/svg/CategoryArrow";
import { useEffect, useState } from "react";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export const AddCategoryTest = () => {
  const [bgColor, setBgColor] = useState("#F3F4F6");
  const [bgIcon, setBgIcon] = useState(<HomeIcon />);
  const [categoryName, setCategoryName] = useState("");
  const [newCategory, setNewCategory] = useState([]);
  const [defCategory, setDefCategory] = useState([bgIcon]);

  const handleColor = (color) => {
    return setBgColor(color);
  };

  const handleIcon = (iconName) => {
    return setBgIcon(iconName);
  };

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

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
            <div className="flex justify-between w-[446px] items-center">
              <div>
                {/* <button
                  className={`btn 
                    bg - ${[
                      bgColor,
                    ]} border border-[#D1D5DB] flex justify-between`}
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
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
                </dialog> */}
              </div>
              <details className="dropdown">
                <summary className="btn m-1">{bgIcon}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[320px] p-2 shadow">
                  <li className="w-[300px] grid grid-cols-6 grid-rows-5">
                    {icons.map((icon, index) => {
                      return (
                        <div key={index} className="">
                          {icon.icon}
                        </div>
                      );
                    })}
                  </li>
                  <button className="flex">
                    {colors.map((color, index) => {
                      return (
                        <div
                          key={index}
                          className={`bg-[${color?.color}] rounded-ful w-8 h-8`}
                        >
                          hi
                        </div>
                      );
                    })}
                  </button>
                </ul>
              </details>
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                className="input input-bordered w-[350px] bg-[#F3F4F6]"
              />
            </div>
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
