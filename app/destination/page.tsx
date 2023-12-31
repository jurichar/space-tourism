"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";
import { Barlow_Condensed, Barlow } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["100", "600"],
});

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["100"],
});

export default function Destination() {
    const destinations = data.destinations;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    return (
        <div className={styles.content}>
            <h3 className={barlowCondensed.className}>
                <span className={styles.gray}>{"01"}</span>
                {"   "}
                <span>{"Pick your destination".toUpperCase()}</span>
            </h3>
            <Image className={styles.image} src={selectedDestination.images.png} alt={"Space Tourism"} width={320} height={320} />
            <div className={styles.divider}>
                <ul className={`${styles.ul} ${barlowCondensed.className}`}>
                    {destinations.map((destination) => (
                        <li key={destination.name} onClick={
                            () => setSelectedDestination(destination)
                        }
                            className={selectedDestination === destination ? styles.active : ''}
                        >
                            {destination.name.toUpperCase()}
                        </li>
                    ))}
                </ul>
                <h1>
                    {selectedDestination.name}
                </h1>
                <p className={`${barlow.className} ${styles.description}`}>
                    {selectedDestination.description}
                </p>
                <div className={styles.separator}></div>
                <div className={styles.information}>
                    <div>
                        <p className={barlow.className}>
                            AVG. DISTANCE</p>
                        <h2>
                            {selectedDestination.distance.toUpperCase()}
                        </h2>
                    </div>
                    <div>
                        <p className={barlow.className}>
                            EST. TRAVEL TIME</p>
                        <h2>
                            {selectedDestination.travel.toUpperCase()}
                        </h2>
                    </div>
                </div>
            </div>
        </div >
    );
}