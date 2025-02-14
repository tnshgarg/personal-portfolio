'use client'

import { SplineScene } from "../../components/ui/splite";
import { Card } from "../../components/ui/card"
import { Gravity, MatterBody } from "../../components/ui/gravity";
import { Typewriter } from "../../components/ui/typewriter";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";

const font = DM_Sans({ subsets: ['latin'] })

export function Hero2() {
    return (
        <Card className={`w-full h-[700px] bg-black/[0.96] relative overflow-hidden font-bold ${font.className}`}>
            {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}

            <div className="flex h-full">
                {/* Left content */}
                <div className="flex-[0.8] p-8 relative z-10 flex flex-col justify-center">
                    {/* <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start text-white font-normal overflow-hidden p-16 pt-48">
                        <Typewriter
                                text={[
                                    "youtuber",
                                    "full stack developer",
                                    "mobile app developer",
                                ]}
                                speed={70}
                                className="text-yellow-500"
                                waitTime={1500}
                                deleteSpeed={40}
                                cursorChar={"_"}
                            />
                    </div> */}
                    <LampContainer className={"w-full"}>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            Hey, I am <br /> Tanish garg
                        </motion.h1>
                    </LampContainer>
                    {/* <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="30%"
                            y="10%"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
                                React
                            </div>
                        </MatterBody>
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="30%"
                            y="30%"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 ">
                                Typescript
                            </div>
                        </MatterBody>
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="40%"
                            y="20%"
                            angle={10}
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
                                Next js
                            </div>
                        </MatterBody>
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="75%"
                            y="10%"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                                Node js
                            </div>
                        </MatterBody>
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="80%"
                            y="20%"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-orange-500  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                                Python
                            </div>
                        </MatterBody>
                        <MatterBody
                            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                            x="50%"
                            y="10%"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                                React Native
                            </div>
                        </MatterBody>
                    </Gravity> */}
                </div>

                {/* Right content */}
                <div className="flex-1 relative">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}