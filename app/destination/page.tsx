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
            <h1>
                01 Pick your destination
            </h1>
            <Image src={selectedDestination.images.png} alt={"Space Tourism"} width={32} height={32} />
            <ul>
                {destinations.map((destination) => (
                    <li key={destination.name} onClick={
                        () => setSelectedDestination(destination)
                    }>
                        {destination.name}
                    </li>
                ))}
            </ul>
            <h2>
                {selectedDestination.name}
            </h2>
            <p>
                {selectedDestination.description}
            </p>
            <div></div>
            <p>AVG. DISTANCE</p>
            <p>
                {selectedDestination.distance}
            </p>
            <p>EST. TRAVEL TIME</p>
            <p>
                {selectedDestination.travel}
            </p>
        </div>
    );
}