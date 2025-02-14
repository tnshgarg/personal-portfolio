"use client"
import { Footer } from "./components/Footer";
import { Hero2 } from "./components/Hero2";
import Main from "./components/Main";
import { TimelineFeed } from "./components/TimelineFeed";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={font.className} >
      <Hero2 />
      <Main />
      <TimelineFeed />
      <Footer />
    </div>
  );
}
