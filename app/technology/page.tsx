"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Technology() {
    const technologies = data.technology;
    const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

    return (
        <div>
            <h1>
                03 Technology
            </h1>
            <Image src={selectedTechnology.images.landscape} alt={"Space Tourism"} width={32} height={32} />
            <ul>
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