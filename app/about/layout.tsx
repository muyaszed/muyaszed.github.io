"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button, Modal, TextInput } from "pixelartui-react";
import { useReducer, useState } from "react";
import { reducer, SideBarContext } from "./AboutContext";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [state, dispatch] = useReducer(reducer, { score: 0 });
    const { score } = state;
    console.log(path);
    return (
        <SideBarContext value={dispatch}>
            <div className="home-layout flex flex-col sm:flex-row h-screen">
                <div className="navbar-container justify-center flex flex-col items-center sm:justify-start">
                    <TextInput
                        textLabel="SCORE"
                        inputName={"score"}
                        type={"main"}
                        value={score.toString()}
                        width={"150px"}
                        height="150px"
                    />
                    <div className="flex justify-center items-center flex-col">
                        {path !== "/about" && (
                            <Button
                                className="about-back-button"
                                buttonSize="large"
                                buttonType="main"
                                text={"BACK"}
                                onClick={() => {
                                    router.replace("/about");
                                }}
                                round
                                fullwidth
                            />
                        )}
                        <Button
                            buttonSize="large"
                            buttonType="main"
                            text={"EXIT"}
                            onClick={() => {
                                setOpenModal(true);
                            }}
                            round
                        />
                        <Modal
                            width="100%"
                            className="exit-modal"
                            name="exit-modal"
                            open={openModal}
                            handleClose={() => {
                                setOpenModal(false);
                            }}
                            header="ATTENTION"
                            actionButtons={{
                                left: "Cancel",
                                right: "OK",
                            }}
                            onClickButtonLeft={() => {}}
                            onClickButtonRight={() => {
                                window.history.pushState(null, "", "/");
                                location.reload();
                            }}
                            backgroundColor="#ffc8d5"
                        >
                            <div className="flex justify-center items-center h-full text-3xl">
                                Are you sure you want to quit?
                            </div>
                        </Modal>
                        <a
                            className="text-white no-underline flex justify-center text-center items-center sm:t-10"
                            href="https://github.com/Pixelartui"
                            title="pixelartui components"
                        >
                            User interface created with Pixelartui
                        </a>
                    </div>
                </div>
                {children}
            </div>
        </SideBarContext>
    );
}
