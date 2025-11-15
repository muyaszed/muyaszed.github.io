"use client";

import Link from "next/link";
import Image from "next/image";
import maiIcon from "../../assets/images/mail-icon.png";
import locationIcon from "../../assets/images/location-icon.png";
import contactIcon from "../../assets/images/calendar-icon.png";

export default function Contact() {
    return (
        <div className="flex flex-col justify-between h-screen sm:w-full">
            <div className="contact-page text-[24px] flex items-center justify-center flex-col sm:w-full mt-20 sm:h-full sm:mt-0 gap-5">
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-location-pin text-[34px] text-red-300"></i>
                    <div>Diss, Norfolk</div>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-envelope text-[34px] text-yellow-300"></i>

                    <Link
                        className="text-white no-underline"
                        href="mailto:myazed.jamal@gmail.com"
                    >
                        myazed.jamal@gmail.com
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <i className="hn hn-phone-ringing-high-solid text-[34px] text-orange-300"></i>

                    <Link
                        className="text-white no-underline"
                        href="https://wa.me/447599650811"
                        target="_blank"
                    >
                        +44 7599650811
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
