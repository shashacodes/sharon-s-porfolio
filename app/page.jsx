"use client";
import React, { useState } from "react";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Link from "next/link";
import DarkModeToggle from "./components/Common/DarkModeToggle";

export default function Page() {
  return (
    <div className="min-h-screen relative top-0 ">
      <div className="flex ">
        <div className="bg-slate-600 w-[50%] min-h-screen  flex items-center justify-center text-white">
          <div className="p-6 border-l-2">
            <p className="font-bold text-2xl  mb-4">Hi there, I'm</p>
            <p className="font-extrabold text-4xl">SHARON IBANGA</p>
            <p>
              I'm a frontend developer dedicated to creating captivating user
              experiences. With a blend of design finesse and technical skill in
              HTML, CSS, and JavaScript, I bring ideas to life and push the
              boundaries of web development.
            </p>
            <Link href="https://github.com/shashacodes/sharon-s-porfolio">
              <button className="mt-8 px-4 py-2 outline-double hover:outline-offset-4 -skew-x-12 bg-slate-800 text-white  rounded-md">
                View Github
              </button>
            </Link>
            <Link href={"/About"}>
              <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-10">
                ______ ABOUT{" "}
              </p>
            </Link>
            <Link href={"/Skills"}>
              <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-4">
                ______ SKILLS{" "}
              </p>
            </Link>
            <Link href={"/Project"}>
              <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-4 ">
                ______ PROJECT{" "}
              </p>
            </Link>
            <Link href={"/Contact"}>
              <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-4 ">
                ______ CONTACT{" "}
              </p>
            </Link>
            <Link href={"/Resume"}>
              <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-4 ">
                ______ RESUME{" "}
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-slate-50 w-[50%] flex flex-col items-center justify-center">
          <img
            src="/assets/3d.jpg"
            alt="3d picture"
            className="rounded-[50%] mb-6"
            width={350}
            height={350}
          />
          <Link href={"/Project"}>
            <button className=" outline-double outline-offset-4 -skew-x-12 bg-slate-600 text-white  hover:text-black  px-6 py-2  rounded-md mb-6">
              See My Work
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
