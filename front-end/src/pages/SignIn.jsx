"use client";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import { LogoIcon } from "@/svg/LogoIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
``;

export const SignInPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/sign-in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          toast.success("Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          router.push("/dashboard");
        }

        if (data.message == "password not match") {
          toast.warning("Password not match. Try again");
        } else {
          setErrorMessage(data.message || "Invalid credentials");
          toast.error("Please sign up");
          router.push("/sign-up");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);

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
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col gap-[16px]"
          >
            <input
              name="email"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              name="password"
              className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
              placeholder="Password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              type="submit"
              className="rounded-[20px] border text-white border-[#D1D5DB] px-[16px] py-[12px] bg-[#0166FF]"
            >
              Log in
            </button>
          </form>
          <div className="flex gap-[8px]">
            <p className="text-[16px] leading-[24px] font-[400]">
              Don’t have account?
            </p>
            <Link href="/sign-up">
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
