import { Typewriter } from "../../components/ui/typewriter";
import { Gravity, MatterBody } from "../../components/ui/gravity";
import { Squares } from "../../components/ui/squares-background";


function Preview() {
    return (
        <div className="w-full h-[600px] flex flex-col relative font-azeretMono bg-black">
            <Squares
                direction="diagonal"
                speed={0.5}
                squareSize={40}
                borderColor="#333"
                hoverFillColor="#222"
            >
                <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start text-white font-normal overflow-hidden p-16 pt-48">
                    <p className="whitespace-pre-wrap font-bold">
                        <span>{"We're born 🌞 to "}</span>
                        <Typewriter
                            text={[
                                "experience",
                                "dance",
                                "love",
                                "be alive",
                                "create things that make the world a better place",
                            ]}
                            speed={70}
                            className="text-yellow-500"
                            waitTime={1500}
                            deleteSpeed={40}
                            cursorChar={"_"}
                        />
                    </p>
                </div>
                <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="30%"
                        y="10%"
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
                            react
                        </div>
                    </MatterBody>
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="30%"
                        y="30%"
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 ">
                            typescript
                        </div>
                    </MatterBody>
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="40%"
                        y="20%"
                        angle={10}
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
                            next js
                        </div>
                    </MatterBody>
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="75%"
                        y="10%"
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                            node js
                        </div>
                    </MatterBody>
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="80%"
                        y="20%"
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-orange-500  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                            python
                        </div>
                    </MatterBody>
                    <MatterBody
                        matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                        x="50%"
                        y="10%"
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                            tailwind
                        </div>
                    </MatterBody>
                </Gravity>
            </Squares>
        </div>
    );
}

export { Preview };
