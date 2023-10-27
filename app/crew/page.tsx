import data from '../data.json';

export default function Crew() {
    const crewMembers = data.crew;
    return (
        <div>
            <h1>
                02 Meet your crew
            </h1>
            <ul>
                {crewMembers.map((crewMember) => (
                    <li key={crewMember.name}>
                        {crewMember.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}