import data from '../data.json';

export default function Destination() {
    const destinations = data.destinations;
    return (
        <div>
            <h1>
                01 Pick your destination
            </h1>
            <ul>
                {destinations.map((destination) => (
                    <li key={destination.name}>
                        {destination.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}