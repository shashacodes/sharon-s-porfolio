"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.css";
import { Icon } from "@iconify/react";

export default function page() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-slate-600 min-h-screen text-white">
      <div className="mt-10 col-span-1 m-8">
        <p className="font-extrabold md:text-[30px] text-[15px]">
          I work mostly with Frontend Technologies
        </p>
        <p className="mt-4 py-4">
          Here are some of the tools i've worked with , for my{" "}
          <strong>personal and professional </strong> projects.My{" "}
          <strong>soft skills</strong> have also contributed majorly to my
          growth and abilities professionally.
        </p>
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
        <Link href={"/About"}>
          <p className="font-bold md:text-[20px] hover:skew-x-12 text-[10px] mt-4">
            ______ ABOUT{" "}
          </p>
        </Link>
        <Link href={"/Project"}>
          <p className="font-bold md:text-[20px] hover:skew-x-12 text-[10px] mt-4 ">
            ______ PROJECT{" "}
          </p>
        </Link>
        <Link href={"/Contact"}>
          <p className="font-bold md:text-[20px] hover:skew-x-12 text-[10px] mt-4 ">
            ______ CONTACT{" "}
          </p>
        </Link>
      </div>
      <div className="tag-list col-span-1 w-full  flex rounded-xl mt-0 flex-col gap-4 p-6 relative overflow-hidden">
        <div
          className="loop-slider loop-slider--normal"
          style={{ "--duration": "15951ms", "--direction": "normal" }}
        >
          <div className="inner flex mt-2">
            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>

            <div className="tag ">
              <span>#</span> JavaScript
            </div>
          </div>
          <div className="inner flex mt-2 pr-10">
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
            <div className="tag ">
              <span>#</span> CSS
            </div>
          </div>
        </div>

        <div
          className="loop-slider loop-slider--reverse"
          style={{ "--duration": "15951ms", "--direction": "normal" }}
        >
          <div className="inner flex mt-2">
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
            <div className="tag ">
              <span>#</span> Typescript
            </div>
          </div>
          <div className="inner flex mt-2 pr-10">
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
            <div className="tag ">
              <span>#</span> Tailwind
            </div>
          </div>
        </div>
        <div
          className="loop-slider loop-slider--normal"
          style={{ "--duration": "15951ms", "--direction": "normal" }}
        >
          <div className="inner flex mt-2">
            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>

            <div className="tag ">
              <span>#</span> React
            </div>
            <div className="tag ">
              <span>#</span> React
            </div>
          </div>
          <div className="inner flex mt-2 pr-10">
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
            <div className="tag ">
              <span>#</span> Git
            </div>
          </div>
        </div>
        <div
          className="loop-slider loop-slider--reverse"
          style={{ "--duration": "15951ms", "--direction": "normal" }}
        >
          <div className="inner flex mt-2">
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
            <div className="tag ">
              <span>#</span> Time-management
            </div>
          </div>

          <div className="inner flex mt-2 pr-10">
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
            <div className="tag ">
              <span>#</span>Team-Work
            </div>
          </div>
        </div>
        <div
          className="loop-slider loop-slider--normal"
          style={{ "--duration": "15951ms", "--direction": "normal" }}
        >
          <div className="inner flex mt-2">
            <div className="tag ">
              <span>#</span> creative-Thinking
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>

            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>
            <div className="tag ">
              <span>#</span> creative-Thinkng
            </div>
          </div>
          <div className="inner flex mt-2 pr-10">
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
            <div className="tag ">
              <span>#</span>Communication
            </div>
          </div>
        </div>
        <div className="fade absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-900 via-transparent to-blue-900"></div>
      </div>
    </div>
  );
}
