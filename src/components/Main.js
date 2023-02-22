import React from "react";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import Nav from "./Nav";
import ConfirmedBooking from "./booking/ConfirmedBooking";
// import "../styles/Main.css";

function Main() {
  //This function will change the availableTimes based on the selected date.
  // Update the updateTimes function that you previously created to use the fetchData API function. Remember, you dispatched the selected date to the updateTimes function. This should be passed to the fetchData function as a parameter.
  const navigate = useNavigate();

  function updateTimes(state, action) {
    return window.fetchAPI(new Date(action.date + "T" + action.time));
  }

  function initializeTimes() {
    return window.fetchAPI(new Date());
  }

  function submitForm(dateVal, timeVal) {
    dispatch({ date: dateVal, time: timeVal });
    navigate("/reservations/ConfirmedBooking");
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <section>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage availableTimes={state} submitForm={submitForm} />
          }
        />
        <Route
          path="/reservations/ConfirmedBooking"
          element={<ConfirmedBooking />}
        />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </section>
  );
}

export default Main;
