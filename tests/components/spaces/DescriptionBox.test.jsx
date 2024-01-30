import DescriptionBox from "@/components/spaces/DescriptionBox";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, } from "vitest";


describe("Testing Generated Images Grid", () => {
  it("testing component loaded", () => {
    render(<DescriptionBox title={"hello"} desc={"ok"} />)
    screen.debug()
    const t = screen.getByTestId("title")
    console.log(t)
    // expect(). toHaveTextContent(title)
    // expect(screen.getByTestId("desc")).toHaveTextContent(desc)
  })
})

