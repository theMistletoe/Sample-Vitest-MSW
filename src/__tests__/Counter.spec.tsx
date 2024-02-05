import '@testing-library/jest-dom'
import Counter from "../Counter";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Counter", () => {
    const user = userEvent.setup()

    it("カウンターの初期値は0", () => {
        render(<Counter />);
        expect(screen.getByText("count is 0")).toBeInTheDocument();
    });

    it("incrementボタンを押すとカウンターが1増える", async () => {
        render(<Counter />);
        const button = screen.getByText("increment");
        await user.click(button);
        expect(screen.getByText("count is 1")).toBeInTheDocument();
    });
});