import data from '../data.json';

export default function Technology() {
    const technologies = data.technology;
    return (
        <div>
            <h1>
                03 Technology
            </h1>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology.name}>
                        {technology.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}