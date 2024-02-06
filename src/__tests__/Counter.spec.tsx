import '@testing-library/jest-dom'
import Counter from "../components/Counter";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Counter", () => {
    const user = userEvent.setup()

    beforeEach(() => {
        render(<Counter />);
    });

    it("カウンターの初期値は0", () => {
        expect(screen.getByText("count is 0")).toBeInTheDocument();
    });

    it("incrementボタンを押すとカウンターが1増える", async () => {
        const button = screen.getByText("+");
        await user.click(button);

        expect(screen.getByText("count is 1")).toBeInTheDocument();
    });
});