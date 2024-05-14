import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./index";

it("should render all components", () => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    expect(getByText("CPF")).toBeInTheDocument();
    expect(getByText("CNPJ")).toBeInTheDocument();
    expect(getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(getByPlaceholderText("@agencianokopy")).toBeInTheDocument();
    expect(getByPlaceholderText("agencianokopy@email.com")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite CPF")).toBeInTheDocument();
    expect(getByText("Pick a date")).toBeInTheDocument();
});
