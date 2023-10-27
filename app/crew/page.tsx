"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Crew() {
    const crewMembers = data.crew;
    const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);

    return (
        <div className={styles.content}>
            <h3>
                {"02 Meet your crew".toUpperCase()}
            </h3>
            <Image className={styles.image} src={selectedCrewMember.images.png} alt={"Space Tourism"} width={32} height={32} />
            <ul className={styles.ul}>
                {crewMembers.map((crewMember) => (
                    <li key={crewMember.name} onClick={
                        () => setSelectedCrewMember(crewMember)
                    }>
                        <div>x</div>
                    </li>
                ))}
            </ul>
            <h3>
                {selectedCrewMember.role}
            </h3>
            <h2>
                {selectedCrewMember.name}
            </h2>
            <p>
                {selectedCrewMember.bio}
            </p>
        </div>
    );
}