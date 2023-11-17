// PokemonCard.js
import React from "react";

const PokemonCard = ({ data }) => {
    return (
            <div className="card" style={{ width: "17rem" }}>
                {data.sprites && data.sprites.other && data.sprites.other["dream_world"] && (
                    <img src={data.sprites.other["dream_world"].front_default} className="card-img-top" alt={data.name} />
                )}
                <div className="card-body">
                    <h3 className="card-title text-center"> {data.name} </h3>
                    <div className="types">
                        {data.types && data.types.map((type, index) => (
                        <p  className="" key={index}>Type: {type.type.name}</p>
                        ))}</div>
                    <div className="stats">
                        {data.stats && data.stats[0] && <p className="card-text"> {data.stats[0].base_stat} hp</p>}{" "}
                        <p className="card-text"> {data["base_experience"]} exp</p>

                        </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {" "}
                        <strong>Attack:</strong> {data.stats && data.stats[1] ? data.stats[1].base_stat : "N/A"}
                    </li>
                    <li className="list-group-item">
                        {" "}
                        <strong>Defense:</strong> {data.stats && data.stats[2] ? data.stats[2].base_stat : "N/A"}
                    </li>
                    <li className="list-group-item">
                        {" "}
                        <strong>Special:</strong> {data.stats && data.stats[3] ? data.stats[3].base_stat : "N/A"}
                    </li>
                    <li className="list-group-item">
                        {" "}
                        <strong>Weight:</strong> {data.weight / 10} Kg <strong>Height:</strong> {data.height / 10} Mts.{" "}
                    </li>
                </ul>
            </div>
    );
};

export default PokemonCard;
