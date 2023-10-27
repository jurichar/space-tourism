"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Destination() {
    const destinations = data.destinations;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    return (
        <div className={styles.content}>
            <h3>
                {"01 Pick your destination".toUpperCase()}
            </h3>
            <Image className={styles.image} src={selectedDestination.images.png} alt={"Space Tourism"} width={320} height={320} />
            <ul className={styles.ul}>
                {destinations.map((destination) => (
                    <li key={destination.name} onClick={
                        () => setSelectedDestination(destination)
                    }>
                        {destination.name.toUpperCase()}
                    </li>
                ))}
            </ul>
            <h1>
                {selectedDestination.name}
            </h1>
            <p>
                {selectedDestination.description}
            </p>
            <div className={styles.separator}></div>
            <p>AVG. DISTANCE</p>
            <h2>
                {selectedDestination.distance.toUpperCase()}
            </h2>
            <p>EST. TRAVEL TIME</p>
            <h2>
                {selectedDestination.travel.toUpperCase()}
            </h2>
        </div>
    );
}