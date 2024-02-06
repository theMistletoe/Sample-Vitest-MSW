import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SearchPokemon } from '../../components/SearchPokemon';

describe("SearchPokemon", () => {
    const user = userEvent.setup()

    beforeEach(() => {
        render(<SearchPokemon />);
    });

    it("数字を入力し、Searchボタンを押すと、ポケモンの名前、身長、体重が表示される", async () => {
        const input = screen.getByPlaceholderText("ポケモンの図鑑番号");
        await user.type(input, "1");

        const button = screen.getByText("Search");
        await user.click(button);

        await waitFor(() => {
            expect(screen.getByText("bulbasaur")).toBeInTheDocument();
            expect(screen.getByText("身長: 0.7m")).toBeInTheDocument();
            expect(screen.getByText("体重: 6.9kg")).toBeInTheDocument();
        });
    });
});

