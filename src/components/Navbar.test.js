import React from "react";
import { render} from "@testing-library/react";
import Navbar from "./Navbar" 

it("renders correctly", () => {
    const { queryByPlaceholderName } = render(<Navbar />)
    expect(queryByPlaceholderName).toBeTruthy()
})