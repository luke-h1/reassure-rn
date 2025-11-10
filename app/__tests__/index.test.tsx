import { render } from "@testing-library/react-native";
import React from "react";
import Index from "../index";

describe("Index Screen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Edit app/index.tsx to edit this screen.")).toBeTruthy();
  });

  it("has correct layout structure", () => {
    const { getByText } = render(<Index />);
    const text = getByText("Edit app/index.tsx to edit this screen.");
    expect(text).toBeTruthy();
  });
});
