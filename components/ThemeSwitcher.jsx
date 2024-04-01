"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex space-x-2">
      {theme !== "dark" && (
        <button
          className="border-none focus:outline-none p-2 rounded-full cursor-pointer bg-white text-gray-800"
          onClick={() => setTheme("dark")}
        >
          <FaMoon />
        </button>
      )}
      {theme !== "light" && (
        <button
          className="border-none focus:outline-none p-2 rounded-full cursor-pointer bg-white text-gray-800"
          onClick={() => setTheme("light")}
        >
          <BsSunFill />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
