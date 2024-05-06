"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>Featured project</h3>
          <Link href="https://mynaijamarket.com/">
            <img
              src="/assets/mnm.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Mynaijamarket</h2>
            <p className="text-gray-600">
              "Developing a vibrant and intuitive frontend for MyNaijaMarket,
              enhancing user experience and engagement in Nigeria's online
              marketplace." .
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>Featured project</h3>
          <Link href="https://www.atmosphere.ng/">
            <img
              src="/assets/at.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              Atmosphere For Business
            </h2>
            <p className="text-gray-600">
              "Crafting an immersive and user-centric frontend atmosphere for
              business website that captivates visitors."
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3> project</h3>
          <Link href="https://techbleat.co.uk/">
            <img
              src="/assets/tech.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Techbleat website</h2>
            <p className="text-gray-600">
              'TechBleat's frontend website: Amplifying tech discourse with
              sleek design and intuitive navigation.'
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://capstone-theta-eight.vercel.app/">
            <img
              src="/assets/groc.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Grocery app</h2>
            <p className="text-gray-600">
              "A user-friendly frontend interface for an online grocery shopping
              platform, offering smooth navigation, dynamic product displays,
              and interactive features." .
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://shashacodes.github.io/pwdgen/">
            <img
              src="/assets/pw.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Password Generator </h2>
            <p className="text-gray-600">
              Using javascript to create a pawword generator with specific
              requirements.
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://shashacodes.github.io/javascript-project/third%20javascript.html">
            <img
              src="/assets/timer.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Timer </h2>
            <p className="text-gray-600">Using javascript to create a timer.</p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://json-app.netlify.app/better">
            <img
              src="/assets/use.png"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              next.js: use state, onchange.....{" "}
            </h2>
            <p className="text-gray-600">
              A project utilising some react hooks.
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://json-app.netlify.app/">
            <img
              src="/assets/api.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">json </h2>
            <p className="text-gray-600">Delivering contents with api </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://shashacodes.github.io/javascript-project/gpa.html">
            <img
              src="/assets/gpa.png"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Gpa calculator</h2>
            <p className="text-gray-600">
              calculate your grade average point.{" "}
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>projects</h3>
          <Link href="https://shashacodes.github.io/javascript-project/bmi.html">
            <img
              src="/assets/bmi.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">Bmi</h2>
            <p className="text-gray-600">
              {" "}
              Calculate Your Body Mass Index with js{" "}
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>projects</h3>
          <Link href="https://shashacodes.github.io/javascript-project/bday.html">
            <img
              src="/assets/bday.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              Birthday Countdown with javascript{" "}
            </h2>
            <p className="text-gray-600">
              Using javascript to create my birthday countdown
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>projects</h3>
          <Link href="https://shashacodes.github.io/frontend/html/markup.html">
            <img
              src="/assets/markup.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              Marking up a page with css and html{" "}
            </h2>
            <p className="text-gray-600">A project with css and html</p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>projects</h3>
          <Link href="https://shashacodes.github.io/tailwind-6b2/index.html">
            <img
              src="/assets/blogr.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              Blog Page using <br /> tailwind{" "}
            </h2>
            <p className="text-gray-600">
              {" "}
              A blogr project with tailwind: next.js.
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>project</h3>
          <Link href="https://signup-delta.vercel.app/">
            <img
              src="/assets/groc.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">signup page</h2>
            <p className="text-gray-600"> A project with next.js </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3>projects</h3>
          <Link href="https://shashacodes.github.io/javascript-project/array.html">
            <img
              src="/assets/groc.jpg"
              alt="Project"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">
              prompt Adding list items{" "}
            </h2>
            <p className="text-gray-600">A project with next.js.</p>
          </Link>
        </div>
      </div>
    </>
  );
}
