import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.filter(dog => dog.name == name)[0]
    console.log(name, dog);
    return (
        <div className="dogDetails">
            <h1>{dog.name}</h1>
            <h2>age: {dog.age}</h2>
            <img src={`/${dog.src}.jpg`} />
            <ul>
                {dog.facts.map(fact=> <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;