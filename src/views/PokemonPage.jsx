import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonPage = () => {
    const [selectedPokemon, setSelectedPokemon] = useState("25");
    const navigate = useNavigate();

    const viewDetails = () => {
        if (selectedPokemon === "") return;
        const path = `/pokemones/${selectedPokemon}`;
        navigate(path);
    };

    return (
        <section className="text-center p-4">
            <h2>Select a Pokémon</h2>
            <div className="select-pokemon">
                <select
                    className="form-select "
                    aria-label="Default select example"
                    onChange={(e) => setSelectedPokemon(e.target.value)}
                    value={selectedPokemon}
                >
                    <option value="25">Pikachu</option>
                    <option value="9">Blastoise</option>
                    <option value="144">Articuno</option>
                    <option value="150">Mewtwo</option>
                    <option value="151">Mew</option>
                    <option value="243">Raikou</option>
                    <option value="244">Entei</option>
                    <option value="379">Registeel</option>
                    <option value="380">Latias</option>
                    <option value="384">Rayquaza</option>
                </select>

                <button type="button" className="btn btn-success" onClick={viewDetails}>
                    View Details
                </button>
            </div>
        </section>
    );
};

export default PokemonPage;
