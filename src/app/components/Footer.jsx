"use client";

import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/tnshgarg",
    image: require("../../../public/github-sign.png")
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://linkedin.com/in/tnshgarg",
    image: require("../../../public/linkedin.png"),
  },
  {
    id: 3,
    name: "Leetcode",
    link: "https://leetcode.com/tnshgarg",
    image: require("../../../public/leetcode.png")
  },
  {
    id: 4,
    name: "Youtube",
    link: "https://www.youtube.com/@tanishgargcodes",
    image: require("../../../public/youtube.png")
  },
];

function Footer() {
  return (
    <div>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
      
    </div>
    <p className="text-center pb-10">Made with ❤️ by Tanish garg</p>
    </div>
  );
}

export { Footer };
