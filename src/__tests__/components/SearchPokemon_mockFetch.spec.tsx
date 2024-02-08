import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SearchPokemon } from '../../components/SearchPokemon';
import { server } from '../../mocks/server';

const fetchMock = vi.fn();
fetchMock.mockReturnValue(
    Promise.resolve({
        json: () => Promise.resolve({
            name: "spinarak",
            height: 5,
            weight: 85,
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
            }
        }),
    }),
);
vi.stubGlobal('fetch', fetchMock);

describe("SearchPokemon", () => {
    const user = userEvent.setup()

    beforeEach(() => {
        server.close() // 検証用にMockを使うため、モックサーバーを閉じる
        render(<SearchPokemon />);
    });

    it("数字を入力し、Searchボタンを押すと、ポケモンの名前、身長、体重が表示される", async () => {
        const input = screen.getByPlaceholderText("ポケモンの図鑑番号");
        await user.type(input, "167");

        const button = screen.getByText("Search");
        await user.click(button);

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledOnce();
            expect(fetchMock).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/167");

            expect(screen.getByText("名前: spinarak")).toBeInTheDocument();
            expect(screen.getByText("身長: 0.5m")).toBeInTheDocument();
            expect(screen.getByText("体重: 8.5kg")).toBeInTheDocument();
        });
    });
});

