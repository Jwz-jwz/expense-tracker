import { EyeIcon } from "@/svg/EyeIcon";
import { AddRecord } from "../AddRecord";
import { AddCategory } from "./AddCategory";
import { NotEye } from "@/svg/NotEye";

export const LeftSide = ({
  setOngo,
  categories,
  colors,
  icons,
  setCategory,
  setRecords,
  transactType,
  handleIcon,
  clickedCatName,
  handleClearButton,
}) => {
  return (
    <div className="w-[282px] h-[912px] rounded-xl border border-[#E5E7EB] mt-8 bg-white px-4 py-6 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-[600] leading-8">Records</h1>
        <AddRecord
          colors={colors}
          icons={icons}
          setRecords={setRecords}
          text={"Add"}
        />
        {/* <PlusAdd /> */}
      </div>
      <input
        className="border border-[#D1D5DB] rounded-lg bg-[#F3F4F6] px-4 py-1"
        type="text"
        placeholder="Search"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-[600] leading-6 text-[#1F2937]">
          Types
        </h1>
        <div className="flex flex-col gap-1 ml-[20px]">
          <div className="flex gap-[15px] items-center">
            <input
              onClick={() => transactType("ALL")}
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
              defaultChecked
            />
            <label htmlFor="radio">All</label>
          </div>
          <div className="flex gap-[15px] items-center">
            <input
              onClick={() => transactType("INC")}
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
            />
            <label htmlFor="radio">Income</label>
          </div>
          <div className="flex gap-[15px] items-center">
            <input
              onClick={() => transactType("EXP")}
              type="radio"
              name="radio-1"
              className="radio w-[15px] h-[15px]"
            />
            <label htmlFor="radio">Expense</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-[#1F2937] text-[16px] font-[600] leading-6">
            Category
          </h1>
          <button
            onClick={handleClearButton}
            className=" text-[16px] font-[400] leading-6"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-[8px] pl-3">
          {categories &&
            categories.map((category) => {
              return (
                <div
                  key={category?.id}
                  className="flex gap-[10px] items-center"
                >
                  {clickedCatName === category.name ? <EyeIcon /> : <NotEye />}
                  <button
                    onClick={() => handleIcon(category?.name)}
                    className="text-[16buttonx] font-[400] leading-6"
                  >
                    {category?.name}
                  </button>
                </div>
              );
            })}
        </div>
        <div className="flex items-center ">
          <AddCategory
            colors={colors}
            icons={icons}
            setCategory={setCategory}
            setOngo={setOngo}
          />
        </div>
      </div>
    </div>
  );
};
