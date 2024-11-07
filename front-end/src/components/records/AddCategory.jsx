import { BluePlusIcon } from "@/svg/BluePlusIcon";
import { CategoryArrow } from "@/svg/CategoryArrow";
import { useState } from "react";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export const AddCategory = ({ colors, icons, setCategory, setOngo }) => {
  const [bgColor, setBgColor] = useState("#F3F4F6");
  const [bgIcon, setBgIcon] = useState("HomeIcon");
  const [categoryName, setCategoryName] = useState("");

  const handleColor = (color) => {
    return setBgColor(color), setOngo(color);
  };

  const handleCatIcon = (iconName) => {
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
      const data = await response.json();
      // state change
      setCategory((prevCats) => [...prevCats, data]);
      setBgColor("#F3F4F6");
      setBgIcon("HomeIcon");
    } catch (error) {
      console.log("error");
    }
    document.getElementById("add_category").close();
  };

  const defaultIcon = icons?.find((icon) => icon?.name === bgIcon);

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
              <details className="dropdown">
                <summary className={`btn m-1 ] flex flex-col`}>
                  {defaultIcon?.icon}
                  <CategoryArrow />
                </summary>
                <ul
                  id="unordered_list"
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[320px] p-2 shadow"
                >
                  <li className="grid grid-cols-6 grid-rows-5 w-[300px]">
                    {icons.map((icon, index) => {
                      return (
                        <button
                          onClick={() => {
                            handleCatIcon(icon?.name);
                          }}
                          key={index}
                        >
                          {icon.icon}
                        </button>
                      );
                    })}
                  </li>
                  <div className="flex justify-between items-center mt-4">
                    {colors.map((color) => (
                      <button
                        onClick={() => {
                          handleColor(color?.color);
                        }}
                        key={color.id}
                        style={{ backgroundColor: color.color }}
                        className={`w-8 h-8 rounded-full`}
                      ></button>
                    ))}
                  </div>
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
