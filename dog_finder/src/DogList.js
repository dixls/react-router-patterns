import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <ul>
            {dogs.map(dog => <li><Link to={`/dogs/${dog.name}`} key={dog.name}>{dog.name}</Link></li>)}
        </ul>
    )
}

export default DogList;