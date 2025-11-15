"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, TextArea, TextInput } from "pixelartui-react";
import meImage from "./assets/images/character.png";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center gap-5 flex-col w-full sm:flex-row sm:justify-center">
                <div className="relative pt-50 sm:pt-0">
                    <Image
                        width={173}
                        src={meImage}
                        alt="me"
                        className=" top-0 left-0 right-100"
                    />
                </div>
                <div className="text-container w-full sm:w-80">
                    <TextInput
                        inputName={"skills"}
                        type={"main"}
                        backgroundColor="#ffffff"
                        noLabel
                        value="Player One"
                        fullwidth
                    />
                    <TextArea
                        fullwidth
                        inputName={"skills"}
                        type={"main"}
                        backgroundColor="#ffffff"
                        noLabel
                        value={`Skills
------------------

Logical thinking
Software debugging
Computer programming
Problem Solving
Conflict resolution
Oral and written
communication
Project Management

Tech Stack
------------------
Javascript, Typescript, React,
Redux, Backbone, HTML, CSS, 
Jquery, PHP, SQL, C# 
                            `}
                    />
                </div>
            </div>

            <Link href={"/about"} className="no-underline w-full sm:w-24">
                <Button
                    buttonSize="large"
                    buttonType="main"
                    text={"Start"}
                    onClick={() => {}}
                    round
                    fullwidth
                    buttonStyle="light"
                />
            </Link>
        </div>
    );
}
