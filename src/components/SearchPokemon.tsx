import { useState } from "react";
import { useSearchPokemon } from "../hooks/useSearchPokemon";

export const SearchPokemon = () => {
    const [input, setInput] = useState<string>("");
    const { search, searchedPokemon } = useSearchPokemon();

    const handleClick = () => {
        if (!input) return;
        search(input);
    };

    return (
        <div>
            <input
                placeholder="ポケモンの図鑑番号"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
            {searchedPokemon && (
                <div>
                    <p>名前: {searchedPokemon.name}</p>
                    <p>身長: {searchedPokemon.height / 10}m</p>
                    <p>体重: {searchedPokemon.weight / 10}kg</p>
                    <img
                        src={searchedPokemon.sprites.front_default}
                        alt={searchedPokemon.name}
                    />
                </div>
            )}
        </div>
    );
    }