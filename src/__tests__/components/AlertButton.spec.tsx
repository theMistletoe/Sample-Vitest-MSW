import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { AlertButton } from '../../components/AlertButton';

const spyFnAlert = vi.spyOn(window, 'alert').mockImplementation(() => {});

describe("AlertButton", () => {
    const user = userEvent.setup()

    beforeEach(() => {
        render(<AlertButton />);
    });

    it("ボタンを押すとアラートが表示される", async () => {
        const button = screen.getByText("Alert");
        await user.click(button);

        expect(spyFnAlert).toHaveBeenCalledWith("Hi!");
    });
});