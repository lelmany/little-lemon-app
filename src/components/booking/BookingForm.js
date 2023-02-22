import { useState } from "react";
import localISOTime from "./localISOTime";
import GuestsErrorMessage from "./GuestsErrorMessage";
import Button from "../Button";
import "../../styles/Booking.css";

function BookingForm({ availableTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState({ value: "", isTouched: false });
  const [occasion, setOccasion] = useState("Birthday");

  const getIsFormValid = () => {
    return date && time && guests.value !== "";
  };

  const clearForm = () => {
    setDate("");
    setTime(availableTimes[0]);
    setGuests({ value: "", isTouched: false });
    setOccasion("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (getIsFormValid()) {
      if (window.submitAPI(date)) {
        submitForm(date, time);
      }
      clearForm();
    }
  }

  return (
    <main>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <fieldset className="formField">
          <div className="field">
            <label htmlFor="resDate" className="labelForm">
              Select a date
            </label>
            <input
              className="inputField"
              type="date"
              id="resDate"
              data-testid="resDate"
              aria-label="Select a date"
              name="resDate"
              value={date}
              // value={data.resDate}
              min={localISOTime()}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>

          <div className="field">
            <label htmlFor="resTime" className="labelForm">
              Choose time
            </label>
            <select
              className="inputField"
              id="resTime"
              data-testid="resTime"
              name="resTime"
              aria-label="Choose time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((option) => {
                return (
                  <option
                    key={option}
                    value={option}
                    aria-selected="false"
                    className="inputField"
                  >
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <label htmlFor="guests" className="labelForm">
              Number of guests
            </label>
            <input
              type="number"
              className="inputField guestsNum"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              aria-label="Number of guests"
              value={guests.value}
              onChange={(e) => {
                setGuests({ ...guests, value: e.target.value });
              }}
              onBlur={() => {
                setGuests({ ...guests, isTouched: true });
              }}
            ></input>
          </div>
          {guests.isTouched && guests.value.length < 1 ? (
            <GuestsErrorMessage />
          ) : null}

          <div className="field">
            <label htmlFor="occasion" className="labelForm">
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => {
                setOccasion(e.target.value);
              }}
              className="inputField"
              aria-label="Occasion"
            >
              <option value="birthday" className="inputField">
                Birthday
              </option>
              <option value="anniversary" className="inputField">
                Anniversary
              </option>
            </select>
          </div>
          <div className="field confirmation">
            <Button
              className="button"
              type="submit"
              aria-label="reserve a table"
              disabled={!getIsFormValid()}
            >
              Book a Table
            </Button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default BookingForm;
