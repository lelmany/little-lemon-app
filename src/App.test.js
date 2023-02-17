import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Main from "./components/Main";

import Booking from "./components/Booking";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("Renders the Booking Form heading", () => {
  const component = render(
    <BrowserRouter>
      <Booking availableTimes={[]} submitForm={"2023-02-23"}></Booking>
    </BrowserRouter>
  );

  const headingElement = component.getByTestId("header");
  expect(headingElement.textContent).toBe("Booking a Table");
});

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

  const buttonElement = component.getByRole("button");
  userEvent.click(buttonElement);
  expect(
    component.getByText("Your booking has been succesfully confirmed.")
  ).toBeInTheDocument();
});
