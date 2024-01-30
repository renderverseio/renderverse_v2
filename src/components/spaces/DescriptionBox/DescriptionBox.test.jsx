import { render, screen } from "@testing-library/react";
import { describe, expect, it, } from "vitest";
import DescriptionBox from "./DescriptionBox";


describe("Testing Generated Images Grid", () => {
  it("Testing Component Props", () => {
    const title = "hello"
    const desc = "ok"
    const { getByTestId } = render(<DescriptionBox title={title} desc={desc} />)
    expect(getByTestId("title")).toBeInTheDocument()

    // const t = screen.getByTestId("title");
    // console.log(t)
    // expect().toHaveTextContent(title)
    // expect(screen.getAllByTestId("desc")).toHaveTextContent(desc)
  })
})

