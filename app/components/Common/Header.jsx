import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between list-none items-center px-6 py-4 absolute mt-10  left-0 right-0 z-10">
      <Link href="/">
        <li className="text-xl font-bold">
          <img
            src="favicon.ico"
            alt="3d picture"
            className="rounded-[50%] mb-6"
            width={50}
            height={50}
          />
        </li>
      </Link>
      <nav className="flex space-x-6">
        <Link href="/">
          <li className="hover:underline">HOME</li>
        </Link>
        <Link href="/About">
          <li className="hover:underline">ABOUT</li>
        </Link>
        <Link href="/Contact">
          <li className="hover:underline">CONTACT</li>
        </Link>
        <Link href="/Resume">
          <li className="hover:underline">RESUME</li>
        </Link>
      </nav>
    </header>
  );
}
