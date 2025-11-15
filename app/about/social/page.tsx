"use client";

import Link from "next/link";
import Image from "next/image";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import xIcon from "../../assets/images/x-icon.png";
import instaIcon from "../../assets/images/insta-icon.png";
import fbIcon from "../../assets/images/fb-icon.png";
import { Box, Button } from "pixelartui-react";
import { MouseEvent } from "react";

export default function Social() {
    return (
        <div className="flex flex-col justify-between h-screen sm:w-full">
            <div className="contact-page flex text-[24px] gap-5 items-center justify-center flex-col sm:w-full mt-20 sm:h-full sm:mt-0">
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-linkedin text-[34px] text-blue-700"></i>
                    <Link
                        className="text-white no-underline"
                        href="https://www.linkedin.com/in/yazedjamal/"
                        target="_blank"
                    >
                        Yazed Jamal
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-x text-[34px]"></i>

                    <Link
                        className="text-white no-underline"
                        href="https://x.com/muyaszed"
                        target="_blank"
                    >
                        muyaszed
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-instagram text-[34px] text-red-400"></i>

                    <Link
                        className="text-white no-underline"
                        href="https://www.instagram.com/yazed_jamal"
                        target="_blank"
                    >
                        yazed_jamal
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-facebook-square text-[34px] text-blue-900"></i>

                    <Link
                        className="text-white no-underline"
                        href="https://www.facebook.com/yazed.jamal"
                        target="_blank"
                    >
                        yazed.jamal
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                Icons from{" "}
                <a
                    className="text-[#2FA1E1] px-2"
                    href="https://pixeliconlibrary.com/"
                >
                    Pixel Icon Library
                </a>
                by
                <a
                    className="text-[#2FA1E1] px-2"
                    href="https://hackernoon.com/"
                >
                    HackerNoon
                </a>
            </div>
        </div>
    );
}
