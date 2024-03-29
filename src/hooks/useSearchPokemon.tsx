import { useState } from "react";

type Pokemon = {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
};

export const useSearchPokemon = function () {
    const [searchedPokemon, setSearchedPokemon] = useState<Pokemon | undefined>(undefined);

    const search = async (pokedexNumber: string) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`);
        const data = await response.json();
        setSearchedPokemon({
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprites: data.sprites,
        });
    };

    return { search, searchedPokemon };
};