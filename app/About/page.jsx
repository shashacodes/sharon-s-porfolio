"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Footer from "../components/Common/Footer";

export default function about() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6  p-2 bg-slate-600 min-h-screen  text-white">
      <div className="col-span-1 border-transparent-[2px]  md:p-5 p-2 bg-slate-600 rounded-xl outline-double outline-transparent shadow-2xl shadow-slate-500 md:text-xl text-base">
        <p className="px-6 py-6">
          <strong>Sharon</strong> is an advocate for user-centered design and
          accessibility, seamlessly integrating interactive elements and
          intuitive navigation. <br /> Her exceptional communication skills and
          collaborative nature make her an invaluable asset to any project.{" "}
          <br />
          With a continuous learning mindset, she stays updated with the latest
          trends, delivering innovative solutions. <br />
        </p>
        <p className="px-6 py-6">
          <strong>Sharon</strong>'s expertise, creativity, and commitment to
          excellence make her a true force in frontend development.
        </p>{" "}
        <Link href="/Resume">
          <button className="mt-8 px-4 py-2 outline-double hover:outline-offset-4 -skew-x-12 bg-slate-600 text-white  hover:text-black rounded-md">
            View Resume
          </button>
        </Link>
        <Link href={"/"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-10">
            ______ HOME{" "}
          </p>
        </Link>
        <Link href={"/Skills"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4">
            ______ SKILLS{" "}
          </p>
        </Link>
        <Link href={"/Project"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4 ">
            ______ PROJECT{" "}
          </p>
        </Link>
        <Link href={"/Contact"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4 ">
            ______ CONTACT{" "}
          </p>
        </Link>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col min-h-screen flex-grow">
          <div className="relative bg-gray-300 w-96 h-96 font-sans text-black font-extrabold md:text-[80px] text-[55px] rounded-lg flex items-center justify-center">
            <div className="absolute inset-y-0 right-0  h-full w-2   bg-black"></div>
            FE
          </div>

          <div className="grid grid-cols-5 text-black font-extrabold gap-4 mt-8">
            <div className="border animate-bounce hover:skew-x-12 bg-white  border-white rounded-md p-2 flex items-center justify-center">
              F
            </div>
            <div className="border animate-bounce bg-white hover:skew-y-6 border-white rounded-md p-2 flex items-center justify-center">
              R
            </div>
            <div className="border animate-bounce bg-white hover:skew-x-12 border-white rounded-md p-2 flex items-center justify-center">
              O
            </div>
            <div className="border animate-bounce bg-white hover:skew-y-6 border-white rounded-md p-2 flex items-center justify-center">
              N
            </div>
            <div className="border animate-bounce bg-white hover:skew-x-12 border-white rounded-md p-2 flex items-center justify-center">
              T
            </div>
          </div>

          <div className="grid grid-cols-3 text-black font-extrabold gap-4 mt-8">
            <div className="border animate-bounce bg-white hover:skew-x-12 border-white rounded-md p-2 flex items-center justify-center">
              E
            </div>
            <div className="border animate-bounce bg-white hover:skew-y-6 border-white rounded-md p-2 flex items-center justify-center">
              N
            </div>
            <div className="border animate-bounce bg-white hover:skew-x-12 border-white rounded-md p-2 flex items-center justify-center">
              D
            </div>
          </div>
        </div>

        <div className="flex md:gap-8 gap-6 px-6 py-6">
          <Link href="https://www.instagram.com/sharon_ibx/">
            <Icon icon="skill-icons:instagram" className="text-3xl mr-4" />
          </Link>
          <Link href={"mailto:ibsharon19@gmail.com"}>
            <Icon
              icon="ic:round-email"
              className="text-3xl mr-4 text-[#39628e]"
            />
          </Link>
          <Link href="https://twitter.com/ibsharon19_lee">
            <Icon icon="openmoji:twitter" className="text-3xl mr-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/sharon-ibanga-511894177/">
            <Icon icon="devicon:linkedin" className="text-3xl mr-4" />
          </Link>
          <Link href={"https://github.com/shashacodes"}>
            <Icon icon="ri:github-fill" className="text-3xl" color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
