"use client";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import { LogoIcon } from "@/svg/LogoIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignInPage = () => {
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
    if (data.success == false) {
      alert("User not found. Please click on the 'Sign-up'");
      router.push("/sign-up");
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <div className="w-full h-[1200px] flex">
      <div className="w-[50%] h-full flex justify-center">
        <div className="w-[382px] flex flex-col items-center mt-[250px] gap-[40px]">
          <LogoIcon />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[24px] leading-[32px] font-[600]">
              Welcome Back
            </h1>
            <p className="text-[16px] leading-[24px] font-[400]">
              Welcome back, Please enter your details
            </p>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col gap-[16px]"
          >
            <input
              name="name"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Username"
              type="text"
            />
            <input
              name="password"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Password"
              type="password"
            />
            <button className="rounded-[20px] border text-white border-[#D1D5DB] px-[16px] py-[12px] bg-[#0166FF]">
              Log in
            </button>
          </form>
          <div className="flex gap-[8px]">
            <p className="text-[16px] leading-[24px] font-[400]">
              Don’t have account?
            </p>
            <Link href="/sign-up-page">
              <button className="text-[16px] leading-[24px] font-[400] text-[#0166FF]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full bg-[#0166FF]"></div>
    </div>
  );
};
