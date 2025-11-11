"use client";
import Link from "next/link";
import { Button, Select, Box } from "pixelartui-react";
import { useContext, useState } from "react";
import { SideBarContext } from "../AboutContext";
interface MenuItem {
    name: string;
    link: string;
    desc: string;
    type: string;
    preview: boolean;
}
const menu: MenuItem[] = [
    {
        name: "Paper CSS",
        link: "https://github.com/papercss",
        desc: "My first contribution on Open source work",
        type: "openSource",
        preview: false,
    },
    {
        name: "Pixelartui",
        link: "https://github.com/Pixelartui",
        desc: "My own Open source work. Still in beta",
        type: "openSource",
        preview: false,
    },
    {
        name: "Wordsort game",
        link: "https://wordsort.web.app",
        desc: "A word based game build using flutter during a hackathon",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Vibe coding",
        link: "https://makeyourautomation.com",
        desc: "A website I build by vibe coding using cursor. It is a directory/marketplace to get and give automation flow.",
        type: "openSource",
        preview: true,
    },
    {
        name: "My calculator",
        link: "/calculator/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Wiki search",
        link: "/wikisearch/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Podomoro",
        link: "/podomoro/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Quote Generator",
        link: "/quote/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Weather app",
        link: "/weather/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Color guess",
        link: "/guess/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Pong Ping",
        link: "/pongping/index.html",
        desc: "A collection of my early JS projects",
        type: "funStuff",
        preview: true,
    },
    {
        name: "Dig Dug",
        link: "/myDigDug/index.html",
        desc: "A game I've created using melon js inspired with series Stranger thing",
        type: "funStuff",
        preview: true,
    },
];

export default function Portfolio() {
    const [selectedCat, setSelectedCat] = useState("openSource");
    const [selectedMenu, setSelectedMenu] = useState<MenuItem | undefined>(
        menu[0]
    );
    const dispatch = useContext(SideBarContext);
    const handleCategoryChanged = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (dispatch) {
            dispatch({ type: "INCREASE" });
        }
        setSelectedCat(e.currentTarget.dataset.value!);
    };
    return (
        <div className="portfolio-page flex items-center flex-col sm:w-full">
            <div className="header flex flex-col items-center w-full">
                <div className="drop-down z-10 w-full">
                    <Select
                        className="category-menu-select"
                        options={[
                            {
                                label: "Open source",
                                value: "openSource",
                            },
                            {
                                label: "Fun Stuff",
                                value: "funStuff",
                            },
                        ]}
                        selectLabel="Choose category"
                        selectName="category"
                        type="main"
                        display="Open Source"
                        onChange={handleCategoryChanged}
                    />
                </div>
                <div className="menu flex items-center flex-col gap-2 w-full sm:flex-wrap sm:flex-row">
                    {menu
                        .filter((filterItem) => filterItem.type === selectedCat)
                        .map((item, index) => (
                            <Button
                                className="category-menu-button"
                                key={index}
                                text={item.name}
                                buttonSize={"large"}
                                buttonType={"main"}
                                onClick={() => {
                                    if (dispatch) {
                                        dispatch({ type: "INCREASE" });
                                    }
                                    setSelectedMenu(item);
                                }}
                                backgroundColor={
                                    selectedMenu?.name === item.name
                                        ? "#94cf40"
                                        : ""
                                }
                            />
                        ))}
                </div>
            </div>
            {selectedMenu?.preview && (
                <div className="hidden sm:block w-full h-200 bg-blue-500 mt-10 mb-10">
                    <iframe
                        className="w-full h-full"
                        src={selectedMenu?.link}
                    ></iframe>
                </div>
            )}
            <div className="preview w-full flex justify-center">
                <Box className="category-desc-box">
                    <div className="bg-white text-color text-black p-2 w-full">
                        <div>{selectedMenu?.desc}</div>
                        <Link href={selectedMenu!.link} target="_blank">
                            {selectedMenu?.link}
                        </Link>
                    </div>
                </Box>
            </div>
        </div>
    );
}
