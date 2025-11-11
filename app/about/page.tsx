"use client";
import Link from "next/link";
import { Button } from "pixelartui-react";
import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "./layout";

const boxes: {
    text?: string;
    path?: string;
}[] = [
    {
        text: "PORTFOLIO",
        path: "/about/portfolio",
    },
    {
        text: "CONTACT",
        path: "/about/contact",
    },
    {
        text: "BLOG",
        path: "https://medium.com/@yazed.jamal",
    },
    {
        text: "SOCIAL",
        path: "/about/social",
    },
];

export default function Home() {
    const [menuArray, setMenuArray] = useState(boxes);
    const dispatch = useContext(SideBarContext);

    useEffect(() => {
        function shuffleArray(array: typeof boxes) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            return array;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuArray(shuffleArray([...boxes, ...Array.from(Array(12))]));
    }, []);

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex p-5 text-xl text-center mb-5 sm:text-justify sm:mb-10 pl-[10%] pr-[10%]">
                Experienced Frontend Developer with 6 years plus in SaaS,
                eCommerce, and startup environments. Proven ability to modernize
                legacy systems, implement scalable UI features, and collaborate
                across cross-functional teams. Passionate about user experience,
                clean code, and continuous learning
            </div>
            <div className="grid grid-flow-col grid-rows-4 gap-5 sm:gap-23">
                {menuArray.map((item, index) => (
                    <Link
                        className="no-underline w-full h-full"
                        key={index}
                        href={item ? item.path! : "/about"}
                        {...(item && item.text === "BLOG"
                            ? { target: "_blank" }
                            : {})}
                    >
                        <div className="about-grid w-15 h-15 flex justify-center items-center cursor-crosshair">
                            <Button
                                text={item ? item.text! : ""}
                                buttonSize={"medium"}
                                buttonType={"main"}
                                onClick={(event) => {
                                    if (event.currentTarget.innerText === "") {
                                        if (dispatch) {
                                            dispatch({ type: "DECREASE" });
                                            return;
                                        }
                                    }

                                    if (dispatch) {
                                        dispatch({ type: "INCREASE" });
                                    }
                                }}
                                {...(item
                                    ? { backgroundColor: "#ffffff" }
                                    : {})}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
