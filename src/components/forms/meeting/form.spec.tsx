// import { render, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Form } from ".";

// it("Should render all components", () => {
//   const { getByText, getByPlaceholderText, getByLabelText } = render(<Form />);

//   expect(getByText("CPF")).toBeInTheDocument();
//   expect(getByText("CNPJ")).toBeInTheDocument();
//   expect(getByPlaceholderText("John Doe")).toBeInTheDocument();
//   expect(getByPlaceholderText("@agencianokopy")).toBeInTheDocument();
//   expect(getByPlaceholderText("agencianokopy@email.com")).toBeInTheDocument();
//   expect(getByPlaceholderText("Digite CPF")).toBeInTheDocument();
//   expect(getByText("Pick a date")).toBeInTheDocument();
//   expect(
//     getByLabelText("Informe um hora para agendar sua reuniao")
//   ).toBeInTheDocument();
// });

// it("Getting default values from radios", () => {
//   const { getAllByRole } = render(<Form />);

//   const radios = getAllByRole("radio");
//   expect(radios[0]).toBeChecked();
//   expect(radios[1]).not.toBeChecked();
// });

// it("Submitting validation log", async () => {
//   const { getByLabelText, getByText, getAllByText } = render(<Form />);

//   const name = getByLabelText("Nome Completo");
//   const instagram = getByLabelText("Informe o @ do instagram");
//   const email = getByLabelText("Informe o seu email");
//   const doc = getByLabelText("Digite seu CPF");
//   const date = getByText("Pick a date");
//   const hour = getByLabelText("Informe um hora para agendar sua reuniao");
//   const button = getByText("Send");

//   await userEvent.type(name, "Danilo Alves dos Santos");
//   await userEvent.type(instagram, "@danilodos9818");
//   await userEvent.type(email, "daniloasan.itapira@gmail.com");
//   await userEvent.type(doc, "50388884886");
//   await userEvent.type(hour, "12:30");

//   await userEvent.click(date);
//   const days = getAllByText("1");
//   await userEvent.click(days[1]);
  
//   const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

//   await userEvent.click(button);

//   expect(consoleLogSpy).toHaveBeenCalledWith(
//     expect.objectContaining({
//       date: "01-06-2024",
//       personType: "CPF",
//       value: {
//         cpfcnpj: "503.888.848-86",
//         email: "daniloasan.itapira@gmail.com",
//         hour: "12:30",
//         instagram: "@danilodos9818",
//         name: "Danilo Alves dos Santos",
//       },
//     })
//   );

//   consoleLogSpy.mockRestore();
// });
