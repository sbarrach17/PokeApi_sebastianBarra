import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
    const { id } = useParams();
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const signal = controller.signal;

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { signal });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
                setError("Failed to fetch Pokemon data. Please try again later.");
            } finally {
                controller.abort();
            }
        };

        fetchData();

        return () => {
            setError(""); 
        };
    }, [id]);

    return (
        <div className="card-content">
            {error && <div>Error: {error}</div>}

            {data && <PokemonCard data={data} />}

            <Link to="/Pokemones" className="nav-link text-white fw-medium fs-5">
                <button type="button" className="btn btn-warning">
                    Try Again
                </button>
            </Link>
        </div>
    );
};

export default Pokemon;
