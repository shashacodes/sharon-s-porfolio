"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Page() {
  const recipientEmail = "ibsharon19@gmail.com";
  const subject = "Subject of the Email";
  const body = "Body of the Email";

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-slate-600 text-white">
      <div className="col-span-1 flex flex-col  p-6">
        <div className="px-6 py-6">
          <p className="md:text-[50px] text-[30px] font-extrabold font-serif">
            Want to work with me?{" "}
            <strong className="text-cyan-300">CONNECT!!</strong>
          </p>
          <p className="md:text-xl text-base">
            I am open to remote, hybrid, onsite, part-time, full-time, and
            contract frontend web development <strong>jobs.</strong>
          </p>
        </div>
        <Link href={"/"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-10">
            ______ HOME{" "}
          </p>
        </Link>
        <Link href={"/About"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4">
            ______ ABOUT{" "}
          </p>
        </Link>
        <Link href={"/Project"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4 ">
            ______ PROJECT{" "}
          </p>
        </Link>
        <Link href={"/Skills"}>
          <p className="font-bold hover:skew-x-12 md:text-[20px] text-[10px] mt-4 ">
            ______ SKILLS{" "}
          </p>
        </Link>
        <div className="flex mt-10 md:gap-8 gap-6 px-6 py-6">
          <Link href={"https://github.com/shashacodes"}>
            <Icon icon="ri:github-fill" className="text-3xl" color="black" />
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
          <Link href="https://www.instagram.com/sharon_ibx/">
            <Icon icon="skill-icons:instagram" className="text-3xl mr-4" />
          </Link>
        </div>
      </div>
      <div className="col-span-1 md:mt-12 md:p-6 md:ml-0 ml-4">
        <div className="border border-gray-300 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <div className="mb-6">
            <label htmlFor="fullName" className="block mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full border text-black border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
