"use client";

import { WhitePlusIcon } from "../svg/WhitePlusIcon";

export const AddRecord = () => {
  return (
    <div>
      <button
        className="btn bg-[#0166FF] rounded-[20px] flex gap-1"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <WhitePlusIcon />
        <p className="text-6 leading-4 font-[400] text-white">Record</p>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
