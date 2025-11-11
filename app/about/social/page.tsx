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
            <div className="contact-page flex items-center justify-center flex-col sm:w-full mt-20 sm:h-full sm:mt-0">
                <div className="button-group flex justify-center items-center gap-2">
                    <Image
                        alt="linkedin-icon"
                        src={linkedinIcon}
                        width={50}
                        height={50}
                    />
                    <Link
                        className="text-white no-underline"
                        href="https://www.linkedin.com/in/yazedjamal/"
                        target="_blank"
                    >
                        Yazed Jamal
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <Box>
                        <div className="text-white w-7 h-7 flex justify-center items-center">
                            X
                        </div>
                    </Box>

                    <Link
                        className="text-white no-underline"
                        href="https://x.com/muyaszed"
                        target="_blank"
                    >
                        muyaszed
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <Image
                        alt="insta-icon"
                        src={instaIcon}
                        width={50}
                        height={50}
                    />

                    <Link
                        className="text-white no-underline"
                        href="https://www.instagram.com/yazed_jamal"
                        target="_blank"
                    >
                        yazed_jamal
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <Image alt="fb-icon" src={fbIcon} width={50} height={50} />

                    <Link
                        className="text-white no-underline"
                        href="https://www.facebook.com/yazed.jamal"
                        target="_blank"
                    >
                        yazed.jamal
                    </Link>
                </div>
            </div>
            <a
                className="text-white no-underline flex justify-center"
                href="https://www.flaticon.com/free-icons/pixel"
                title="pixel icons"
            >
                Pixel icons created by Freepik - Flaticon
            </a>
        </div>
    );
}
