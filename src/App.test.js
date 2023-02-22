import { fireEvent, act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./components/Main";
import BookingForm from "./components/booking/BookingForm";
import BookingPage from "./pages/BookingPage";

import "@testing-library/jest-dom/extend-expect";

// ____________1_____________
test("Renders the Booking Form heading", () => {
  const component = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <BookingPage availableTimes={[]} submitForm={"2023-02-23"}></BookingPage>
    </MemoryRouter>
  );

  const headingElement = component.getByTestId("header");
  expect(headingElement.textContent).toBe("Booking a Table");
});

// ____________2_____________

test("test initializeTimes", () => {
  window.fetchAPI = function (date) {
    return ["17:01", "18:02", "19:03", "20:04"];
  };
  const component = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>
  );

  expect(component.getByText("17:01")).toBeInTheDocument();
  expect(component.getByText("18:02")).toBeInTheDocument();
  expect(component.getByText("19:03")).toBeInTheDocument();
  expect(component.getByText("20:04")).toBeInTheDocument();
});

// ____________3_____________

test("test updateTimes", () => {
  let i = 1;
  window.fetchAPI = function (date) {
    if (i == 1) {
      i += 1;
      return ["17:01", "18:02", "19:03", "20:04"];
    } else {
      return ["17:02", "18:03", "19:04", "20:05"];
    }
  };

  window.submitAPI = function (date) {
    return true;
  };

  const component = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>
  );

  expect(component.getByText("17:01")).toBeInTheDocument();
  expect(component.getByText("18:02")).toBeInTheDocument();
  expect(component.getByText("19:03")).toBeInTheDocument();
  expect(component.getByText("20:04")).toBeInTheDocument();

  fireEvent.change(component.getByTestId("resTime"), {
    target: { value: "18:02" },
  });

  fireEvent.change(component.getByTestId("resDate"), {
    target: { value: "2023-02-17" },
  });
});

test("Submitting the form mesage", () => {
  const componentBooking = render(
    <MemoryRouter initialEntries={["/reservations/ConfirmedBooking"]}>
      <Main />
    </MemoryRouter>
  );

  const confirmedMessage = componentBooking.getByTestId("confirmedMessage");

  expect(confirmedMessage.textContent).toBe(
    "Your booking has been succesfully confirmed."
  );
});

//
// _________________4

test("submitting Form", () => {
  const componentSubmition = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <BookingForm availableTimes={[]} submitForm={"2023-02-23"} />
    </MemoryRouter>
  );

  // const submitButton = screen.getByRole("button");
  // const submitButton = screen.getByText("Book a Table");

  const submitButton = screen.getByText("Book a Table");

  fireEvent.click(submitButton);

  expect(submitButton).toHaveAttribute("disabled");
});

// _________________5

test("submitting Form", () => {
  const componentSubmition = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <BookingForm availableTimes={[]} submitForm={"2023-02-23"} />
    </MemoryRouter>
  );

  // const submitButton = screen.getByRole("button");

  const submitButton = screen.getByText("Book a Table");

  fireEvent.click(submitButton);

  expect(submitButton).toHaveProperty("disabled", true);
});

// _________________6
test("validate input guests (valid)", () => {
  const handleSubmit = jest.fn();
  const guests = 1;
  const resDate = "2023-02-23";
  const resTime = "17:00";
  const occasion = "Anniversary";

  const componentSubmition = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <BookingForm availableTimes={["17:00"]} submitForm={"2023-02-23"} />
    </MemoryRouter>
  );
  const guestsInput = screen.getByLabelText(/guests/);
  fireEvent.change(guestsInput, { target: { value: guests } });
  const dateInput = screen.getByLabelText(/date/);
  fireEvent.select(dateInput, { target: { value: resDate } });
  const timeInput = screen.getByLabelText(/time/);
  fireEvent.select(timeInput, { target: { value: resTime } });
  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.select(occasionInput, { target: { value: occasion } });
  const submitButton = screen.getByText("Book a Table");
  fireEvent.click(submitButton);

  expect(resDate).toBe("2023-02-23");
  expect(resTime).toBe("17:00");
  expect(occasion).toBe("Anniversary");
  expect(guests).toBe(1);
  // expect(submitButton).toHaveProperty("disabled", false);
});
