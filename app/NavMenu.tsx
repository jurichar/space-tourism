"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./NavMenu.module.scss";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["100", "600"],
});

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_content}>
                <Link href={"/"}>
                    <Image src={"/logo.svg"} alt={"Space Tourism"} width={32} height={32} />
                </Link>
                <button onClick={() => setShowMenu(!showMenu)} className={styles.burger}>
                    <div className={`${styles.line_top} ${showMenu ? styles.line_rotateTopLine : styles.line_reverseRotateTopLine}`}></div>
                    <div className={`${styles.line_middle} ${showMenu ? styles.line_rotateMiddleLine : styles.line_reverseRotateMiddleLine}`}></div>
                    <div className={`${styles.line_bottom} ${showMenu ? styles.line_rotateBottomLine : styles.line_reverseRotateBottomLine}`}></div>
                </button>
            </div>
            <div className={`${styles.list} ${showMenu ? styles.show : styles.hide}`}>
                <ul className={barlow.className}>
                    <li>
                        <Link className={active == 0 ? styles.active : ""} href={"/"} onClick={
                            () => {
                                setShowMenu(false);
                                setActive(0);
                            }
                        }>
                            <strong>
                                {"00".toUpperCase()}
                            </strong>
                            {" "}
                            {"Home".toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link className={active == 1 ? styles.active : ""} href={"/destination"} onClick={
                            () => {
                                setShowMenu(false);
                                setActive(1);
                            }
                        }>
                            <strong>
                                {"01".toUpperCase()}
                            </strong>
                            {" "}
                            {"Destination".toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link className={active == 2 ? styles.active : ""} href={"/crew"} onClick={
                            () => {
                                setShowMenu(false);
                                setActive(2);
                            }
                        }>
                            <strong>
                                {"02".toUpperCase()}
                            </strong>
                            {" "}
                            {"Crew".toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link className={active == 3 ? styles.active : ""} href={"/technology"} onClick={
                            () => {
                                setShowMenu(false);
                                setActive(3);
                            }
                        }>
                            <strong>
                                {"03".toUpperCase()}
                            </strong>
                            {" "}
                            {"Technology".toUpperCase()}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}
