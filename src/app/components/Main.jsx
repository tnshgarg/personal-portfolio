"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { Squares } from "../../components/ui/squares-background";
import Image from "next/image";

export default function Main() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Squares
                direction="diagonal"
                speed={0.5}
                squareSize={40}
                borderColor="#333"
                hoverFillColor="#222"
            >
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                I'm Glllaaaaadd to <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Meet you
                                </span>
                            </h1>
                        </>
                    }
                >

                    <Image
                        src={require("../../../public/github.png")}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </Squares>
        </div>
    );
}
