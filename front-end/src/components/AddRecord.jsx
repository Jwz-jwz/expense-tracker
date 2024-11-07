import { useEffect, useState } from "react";
import { WhitePlusIcon } from "../svg/WhitePlusIcon";
import { CategoryArrow } from "@/svg/CategoryArrow";
import { AddCategory } from "./records/AddCategory";
import { IconArrow } from "./records/IconArrow";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export const AddRecord = ({ colors, icons, setRecords }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isColor, setIsColor] = useState(true);
  const [transaction, setTransaction] = useState("");
  const [postRecord, setPostRecord] = useState({});
  const [categoryId, setCategoryId] = useState();

  const ChangeBgColor = (value) => {
    setIsClicked(!isClicked);
    setIsColor(!isColor);
    setTransaction(value);
  };

  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/category `);
      const data = await response.json();
      setCategory(data?.data);
      // setCategory((prevCategory) => [...prevCategory, ...data?.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const recordPost = async () => {
    const postRequest = {
      user_id: "3a6b6809-359e-4378-a95b-874819a28119",
      name: postRecord?.name,
      amount: postRecord?.amount,
      transaction_type: transaction,
      description: postRecord?.description,
      category_id: categoryId,
      date: postRecord?.date,
      time: postRecord?.time,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(postRequest),
    };
    const response = await fetch(`${BACKEND_ENDPOINT}/record`, options);
    const data = await response.json();
    setRecords((prevRecs) => [...prevRecs, data]);
    document.getElementById("my_modal_3").close();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //selectedCategory-n id-g avah heseg
  const selectCategory = (event) => {
    setCategoryId(event.target.value);
  };

  //Input-r orj irj baigaa utguudiig huleej avah heseg
  const handleInputValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPostRecord((prevRecord) => {
      return { ...prevRecord, [name]: value };
    });
  };

  return (
    <div>
      <button
        className="h-8 w-full bg-[#0166FF] flex items-center justify-center rounded-[20px] gap-1"
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
        }}
      >
        <WhitePlusIcon />
        <p className="text-[12px] leading-4 font-[400] text-[white]">Add</p>
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="bg-white rounded-xl p-0 w-[792px]">
          <div className=" flex items-center justify-between h-[50px] border-b border-b-[#E2E8F0] py-[24px] px-[30px]">
            <h3 className="text-[20px] leading-7 font-[600]">Add record</h3>
            <form
              method="dialog"
              className="flex justify-between items-center "
            >
              <button className=" top-1">✕</button>
            </form>
          </div>
          <div className="flex justify-center w-[792px]">
            <div className="w-[50%] flex flex-col gap-[20px] px-[20px] py-[24px]">
              <div className="flex justify-between  w-[348px] rounded-[20px] bg-[#F3F4F6]">
                <button
                  onClick={() => {
                    ChangeBgColor("EXP");
                  }}
                  className={`w-[172px] h-[40px] py-[12px] ${
                    isClicked
                      ? "bg-[#0166FF] text-white rounded-[20px]"
                      : "bg-[#F3F4F6] text-black rounded-r-[20px]"
                  } rounded-l-[20px] flex items-center justify-center`}
                >
                  Expense
                </button>
                <button
                  onClick={() => {
                    ChangeBgColor("INC");
                  }}
                  className={`w-[172px] h-[40px] py-[12px] ${
                    isClicked
                      ? "bg-[#F3F4F6] text-black rounded-r-[20px]"
                      : "bg-[#16A34A] text-white rounded-[20px]"
                  }  flex items-center justify-center`}
                >
                  Income
                </button>
              </div>
              <div className="flex flex-col gap-[24px] w-[348px]">
                <div className="w-full h-[76px] px-4 py-3 bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB]">
                  <p className="text-[16px] font-[400] leading-6">Amount</p>
                  <input
                    onChange={handleInputValue}
                    name="amount"
                    placeholder="₮ 000.00"
                    type="amount"
                    className="bg-[#F3F4F6]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-[400] leading-6">Category</p>

                  <select
                    onChange={selectCategory}
                    className="select select-bordered w-full bg-[#F3F4F6]"
                  >
                    <option value="" defaultValue>
                      Choose category
                    </option>
                    {category?.map((categorySingle) => {
                      return (
                        <option
                          key={categorySingle?.id}
                          value={categorySingle?.id}
                        >
                          {categorySingle?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex  justify-between">
                  <div className="flex flex-col gap-1 w-[168px]">
                    <p className="text-[16px] font-[400] leading-6">Date</p>
                    <input
                      onChange={handleInputValue}
                      name="date"
                      className="bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB] p-[8px]"
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[168px]">
                    <p className="text-[16px] font-[400] leading-6">Time</p>
                    <input
                      onChange={handleInputValue}
                      name="time"
                      className="bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB] p-[8px]"
                      type="time"
                    />
                  </div>
                </div>
                <button
                  onClick={recordPost}
                  className={`w-full rounded-[20px] flex justify-center items-center text-white py-[12px] ${
                    isColor ? "bg-[#0166FF]" : "bg-[#16A34A]"
                  }`}
                >
                  Add record
                </button>
              </div>
            </div>

            <div className="w-[50%] px-[20px] py-[24px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[400] leading-6">Payee</p>
                <input
                  onChange={handleInputValue}
                  name="name"
                  type="text"
                  placeholder="Write here"
                  className="w-full input input-bordered bg-[#F3F4F6]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[400] leading-6">Note</p>
                <textarea
                  onChange={handleInputValue}
                  name="description"
                  type="text"
                  placeholder="Write here"
                  className="w-full h-[280px] input input-bordered bg-[#F3F4F6] pt-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
