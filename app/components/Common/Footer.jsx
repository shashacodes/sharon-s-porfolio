import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex fixed bottom-0 w-full  text-white p-4 justify-center items-center mt-8">
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
      </footer>
    </>
  );
}
