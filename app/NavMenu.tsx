"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./NavMenu.module.scss";

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
                <div>
                    <ul >
                        <li>
                            <Link href={"/"}>00 Home</Link>
                        </li>
                        <li>
                            <Link href={"/destination"}>01 Destination</Link>
                        </li>
                        <li>
                            <Link href={"/crew"}>02 Crew</Link>
                        </li>
                        <li>
                            <Link href={"/technology"}>03 Technology</Link>
                        </li>
                    </ul>
                </div>
            ) : null}
        </nav>
    );
}
