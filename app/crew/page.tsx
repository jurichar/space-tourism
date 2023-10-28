"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";
import { Barlow, Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["100", "600"],
});

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["100"],
});

export default function Crew() {
    const crewMembers = data.crew;
    const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);

    return (
        <div className={styles.content}>
            <h3 className={barlowCondensed.className}>
                <span className={styles.gray}>{"02"}</span>
                {"   "}
                <span>{"Meet your crew".toUpperCase()}</span>
            </h3>
            <div className={styles.image_container}>
                <Image className={styles.image} src={selectedCrewMember.images.png} alt={"Space Tourism"} width={320} height={320} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <ul className={styles.ul}>
                {crewMembers.map((crewMember) => (
                    <li key={crewMember.name} onClick={
                        () => setSelectedCrewMember(crewMember)
                    }
                    >
                        <div className={`${styles.dot} ${selectedCrewMember === crewMember ? styles.active : ''}`}
                        ></div>
                    </li>
                ))}
            </ul>
            <h3>
                {selectedCrewMember.role.toUpperCase()}
            </h3>
            <h2>
                {selectedCrewMember.name.toUpperCase()}
            </h2>
            <p className={barlow.className}>
                {selectedCrewMember.bio}
            </p>
        </div>
    );
}