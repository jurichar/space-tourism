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
    weight: ["100", "400", "600"],
});

export default function Technology() {
    const technologies = data.technology;
    const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

    return (
        <div className={styles.content}>
            <h3 className={barlowCondensed.className}>
                <span className={styles.gray}>{"03"}</span>
                {"   "}
                <span>{"Pick your destination".toUpperCase()}</span>
            </h3>
            <div className={styles.image_container}>
                <Image className={styles.image} src={selectedTechnology.images.landscape} alt={"Space Tourism"} width={320} height={3200} quality={100} style={{
                    objectFit: "contain"
                }} />
            </div>
            <ul className={styles.ul}>
                {technologies.map((technology, i) => (
                    <li key={technology.name} onClick={() => setSelectedTechnology(technology)}>
                        <div className={`${styles.dot} ${selectedTechnology === technology ? styles.active : ''}`}
                        >{i + 1}</div>
                    </li>
                ))}
            </ul>
            <h3 className={`${barlowCondensed.className} ${styles.subtitle}`}>THE TERMINOLOGY ...</h3>
            <h2>
                {selectedTechnology.name.toUpperCase()}
            </h2>
            <p className={barlow.className}>
                {selectedTechnology.description}
            </p>
        </div>
    )
}