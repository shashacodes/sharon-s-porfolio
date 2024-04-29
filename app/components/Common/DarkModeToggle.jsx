"use client";
import React, { useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("dark-mode");
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
