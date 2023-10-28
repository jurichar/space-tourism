"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Technology() {
    const technologies = data.technology;
    const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

    return (
        <div className={styles.content}>
            <h3>
                {"03 Technology".toUpperCase()}
            </h3>
            <Image className={styles.image} src={selectedTechnology.images.landscape} alt={"Space Tourism"} width={320} height={320} />
            <ul className={styles.ul}>
                {technologies.map((technology) => (
                    <li key={technology.name} onClick={
                        () => setSelectedTechnology(technology)
                    }>
                        {technology.name}
                    </li>
                ))}
            </ul>
            <h3>THE TERMINOLOGY ...</h3>
            <h2>
                {selectedTechnology.name}
            </h2>
            <p>
                {selectedTechnology.description}
            </p>
        </div>
    )
}