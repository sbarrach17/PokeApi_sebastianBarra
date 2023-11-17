import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemon from "./components/Pokemon";
import PokemonPage from "./views/PokemonPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Pokemones" element={<PokemonPage />} />
                    <Route path="/Pokemones/:id" element={<Pokemon />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
