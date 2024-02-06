import { useState } from "react";

type Pokemon = {
    name: string;
    height: number;
    weight: number;
};

export const SearchPokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
    const [input, setInput] = useState<string>("");

    const search = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await response.json();
        setPokemon({
            name: data.name,
            height: data.height,
            weight: data.weight
        });
    };

    return (
        <div>
            <input
                placeholder="ポケモンの図鑑番号"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={search}>Search</button>
            {pokemon && (
                <div>
                    <p>名前: {pokemon.name}</p>
                    <p>身長: {pokemon.height / 10}m</p>
                    <p>体重: {pokemon.weight / 10}kg</p>
                </div>
            )}
        </div>
    );
    }