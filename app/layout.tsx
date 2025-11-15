import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/pixelify-sans";
import "./globals.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

export const metadata: Metadata = {
    title: "Yazed Jamal Portfolio",
    description:
        "Writes code for a better user experience. Lifelong learner and Engineer of many things",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-[url(./assets/images/bg.jpg)] bg-contain`}>
                {children}
            </body>
        </html>
    );
}
