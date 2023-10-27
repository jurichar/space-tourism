"use client";

import { useState } from 'react';
import data from '../data.json';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Crew() {
    const crewMembers = data.crew;
    const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);

    return (
        <div>
            <h1>
                02 Meet your crew
            </h1>
            <Image src={selectedCrewMember.images.png} alt={"Space Tourism"} width={32} height={32} />
            <ul>
                {crewMembers.map((crewMember) => (
                    <li key={crewMember.name} onClick={
                        () => setSelectedCrewMember(crewMember)
                    }>
                        <div></div>
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