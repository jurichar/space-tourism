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
            {showMenu ? (
                <div className={styles.list}>
                    <ul className={barlow.className}>
                        <li>
                            <Link href={"/"}>
                                <strong>
                                    {"00".toUpperCase()}
                                </strong>
                                {" "}
                                {"Home".toUpperCase()}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/destination"}>
                                <strong>
                                    {"01".toUpperCase()}
                                </strong>
                                {" "}
                                {"Destination".toUpperCase()}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/crew"}>
                                <strong>
                                    {"02".toUpperCase()}
                                </strong>
                                {" "}
                                {"Crew".toUpperCase()}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/technology"}>
                                <strong>
                                    {"03".toUpperCase()}
                                </strong>
                                {" "}
                                {"Technology".toUpperCase()}
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}
        </nav>
    );
}
