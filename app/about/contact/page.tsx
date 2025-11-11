"use client";

import Link from "next/link";
import Image from "next/image";
import maiIcon from "../../assets/images/mail-icon.png";
import locationIcon from "../../assets/images/location-icon.png";
import contactIcon from "../../assets/images/calendar-icon.png";

export default function Contact() {
    return (
        <div className="flex flex-col justify-between h-screen sm:w-full">
            <div className="contact-page flex items-center justify-center flex-col sm:w-full mt-20 sm:h-full sm:mt-0">
                <div className="button-group flex justify-center items-center gap-2">
                    <Image
                        alt="location-icon"
                        src={locationIcon}
                        width={50}
                        height={50}
                    />
                    <div>Diss, Norfolk</div>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <Image
                        alt="mail-icon"
                        src={maiIcon}
                        width={50}
                        height={50}
                    />

                    <Link
                        className="text-white no-underline"
                        href="mailto:myazed.jamal@gmail.com"
                    >
                        myazed.jamal@gmail.com
                    </Link>
                </div>
                <div className="button-group flex justify-center items-center gap-2">
                    <Image
                        alt="contact-icon"
                        src={contactIcon}
                        width={50}
                        height={50}
                    />

                    <Link
                        className="text-white no-underline"
                        href="https://wa.me/447599650811"
                        target="_blank"
                    >
                        +44 7599650811
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
