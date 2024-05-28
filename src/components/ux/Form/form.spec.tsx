import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./index";

it("Should render all components", () => {
  const { getByText, getByPlaceholderText, getByLabelText } = render(<Form />);

  expect(getByText("CPF")).toBeInTheDocument();
  expect(getByText("CNPJ")).toBeInTheDocument();
  expect(getByPlaceholderText("John Doe")).toBeInTheDocument();
  expect(getByPlaceholderText("@agencianokopy")).toBeInTheDocument();
  expect(getByPlaceholderText("agencianokopy@email.com")).toBeInTheDocument();
  expect(getByPlaceholderText("Digite CPF")).toBeInTheDocument();
  expect(getByText("Pick a date")).toBeInTheDocument();
  expect(getByLabelText("Informe um hora para agendar sua reuniao")).toBeInTheDocument();
});

it("Getting default values from radios", () => {
  const { getAllByRole } = render(<Form />);

  const radios = getAllByRole("radio");
  expect(radios[0]).toBeChecked();
  expect(radios[1]).not.toBeChecked();
});

it("Submitting validation", async () => {
  const { getByLabelText, getAllByRole, getByText } = render(<Form />);

  const handleSubmitMock = jest.fn();
  

  const radios = getAllByRole("radio");
  const name = getByLabelText("Nome Completo");
  userEvent.type(name, "Danilo Alves dos Santos");
  const instagram = getByLabelText("Informe o @ do instagram");
  userEvent.type(instagram, "@danilodos9818");
  const email = getByLabelText("Informe o seu email");
  userEvent.type(email, "daniloasan.itapira@gmail.com");
  const doc = getByLabelText("Digite seu CPF");
  userEvent.type(doc, "50388884886");
  const date = getByLabelText("Escolha uma data para reuniao");
  userEvent.type(date, "2024-05-22");
  const hour = getByLabelText("Informe um hora para agendar sua reuniao");
  userEvent.type(hour, "12:30");
  const button = getByText("Send");
  userEvent.click(button);

  expect(handleSubmitMock).toHaveBeenCalled();
});