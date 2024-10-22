"use client";

import Link from "next/link";
import { LogoIcon } from "../svg/LogoIcon";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
      email: event.target.email.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(`${BACKEND_ENDPOINT}/sign-up-page`, options);
    const data = await response.json();
    if (data.success == true) {
      alert("Successfully signed up. Please log-in");
      router.push("/");
    }
  };
  return (
    <div className="w-full h-[1200px] flex">
      <div className="w-[50%] h-full flex justify-center">
        <div className="w-[382px] flex flex-col items-center mt-[250px] gap-[40px]">
          <LogoIcon />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[24px] leading-[32px] font-[600]">
              Create Geld account
            </h1>
            <p className="text-[16px] leading-[24px] font-[400]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col gap-[16px]"
          >
            <input
              name="name"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Name"
              type="text"
            />
            <input
              name="email"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Email"
              type="text"
            />
            <input
              name="password"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Password"
              type="password"
            />
            <input
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Re-password"
              type="password"
            />
            <button className="rounded-[20px] border text-white border-[#D1D5DB] px-[16px] py-[12px] bg-[#0166FF]">
              Sign up
            </button>
          </form>
          <div className="flex gap-[8px]">
            <p className="text-[16px] leading-[24px] font-[400]">
              Already have account?
            </p>
            <Link href={"/"}>
              <button className="text-[16px] leading-[24px] font-[400] text-[#0166FF]">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full bg-[#0166FF]"></div>
    </div>
  );
}
