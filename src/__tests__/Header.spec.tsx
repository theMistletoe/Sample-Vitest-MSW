import '@testing-library/jest-dom'
import { describe, expect, it } from "vitest";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    it("見出しメッセージが見える", () => {
        render(<Header />);
        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });
});