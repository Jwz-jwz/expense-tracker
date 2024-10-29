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
import { useEffect, useRef, useState } from "react";

export const AddCategory = () => {
  const [bgColor, setBgColor] = useState("");
  const buttonBgColor = useRef(null);
  const handleBgColor = () => {
    if (buttonBgColor.current) {
      const currBgColor = window.getComputedStyle(
        buttonRef.current
      ).backgroundColor;
      setBgColor(currBgColor);
    }
  };
  console.log(bgColor);
  useEffect(() => {
    handleBgColor();
  }, []);
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
                      <HomeIcon />
                      <SecondIcon />
                      <ThirdIcon />
                      <FourthIcon />
                      <FifthIcon />
                      <Sixthcon />
                      <SeventhIcon />
                      <EightIcon />
                      <NinethIcon />
                      <TenthIcon />
                      <EleventhIcon />
                      <TwelfthIcon />
                      <ThirteenthIcon />
                      <Fourteenth />
                      <FifteenthIcon />
                      <SixteenthIcon />
                      <SeventeenthIcon />
                      <EighteenthIcon />
                      <NineteenthIcon />
                      <TwentiethIcon />
                      <TwentyFirstIcon />
                      <TwentySecondIcon />
                      <TwentyThirdIcon />
                      <TwentyFourthIcon />
                      <TwentyFifthIcon />
                      <TwentySixthIcon />
                      <TwentySeventhIcon />
                      <TwentyEighticon />
                      <TwentyNinethIcon />
                      <ThirtiethIcon />
                    </div>
                    <p className="border-b border-b-[#E2E8F0] w-full"></p>
                    <div className="grid grid-cols-7 gap-4">
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#01B3FF] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#41CC00] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#F9D100] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#FF7B01] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#AE01FF] rounded-[50%]"
                      ></button>
                      <button
                        onClick={handleBgColor}
                        className="w-[24px] h-[24px] bg-[#FF0101] rounded-[50%]"
                      ></button>
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
