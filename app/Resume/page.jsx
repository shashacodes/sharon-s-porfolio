"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex">
      <div>
        <img src="/assets/m.jpg" alt="Project" height={200} />
      </div>
      <div className="ml-4">
        <div className="flex flex-col justify-center">
          <Link href={"/"}>
            <p className="font-bold  hover:scale-95 md:text-[20px] text-[10px] mt-[80%] ">
              ______ HOME{" "}
            </p>
          </Link>
          <Link href={"/About"}>
            <p className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-12">
              ______ ABOUT{" "}
            </p>
          </Link>
          <Link href={"/Skills"}>
            <p className="font-bold  hover:scale-95 md:text-[20px] text-[10px] mt-12">
              ______ SKILLS{" "}
            </p>
          </Link>
          <Link href={"/Contact"}>
            <p className="font-bold  hover:scale-95 md:text-[20px] text-[10px] mt-12 ">
              ______ CONTACT{" "}
            </p>
          </Link>
          <Link href={"/Project"}>
            <p className="font-bold  hover:scale-95 md:text-[20px] text-[10px] mt-12 ">
              ______ PROJECT{" "}
            </p>
          </Link>
          <a href="file:///C:/Users/USER/Downloads/MyCv%20(1).pdf" download>
            <button className="font-bold hover:scale-95 md:text-[20px] text-[10px] mt-[70%]">
              Download cv
              <Icon icon={"ph:download-duotone"} className="ml-6" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
