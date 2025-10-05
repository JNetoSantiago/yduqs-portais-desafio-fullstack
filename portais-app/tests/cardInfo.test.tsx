import CardInfo from "@/components/cardInfo";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("CardInfo component", () => {
  it("render the title", () => {
    render(<CardInfo title="Título de Teste" subtitle="" />);
    expect(screen.getByText("Título de Teste")).toBeInTheDocument();
  });

  it("render subtitle if has passed", () => {
    render(<CardInfo title="Título" subtitle="Subtítulo" />);
    expect(screen.getByText("Subtítulo")).toBeInTheDocument();
  });

  it("should not render subtitle when dont has passed", () => {
    render(<CardInfo title="Título" subtitle="" />);
    const subtitle = screen.queryByText("Subtítulo");
    expect(subtitle).not.toBeInTheDocument();
  });
});
