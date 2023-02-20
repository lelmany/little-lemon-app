import { useState } from "react";
import "../styles/Booking.css";

function Booking({ availableTimes, submitForm }) {
  const [data, setData] = useState({
    resDate: "",
    resTime: availableTimes[0],
    guests: "",
    occasion: "",
  });

  const getIsFormValid = () => {
    return data.resDate && data.resTime && data.guests !== "";
  };

  const clearForm = () => {
    setData({
      resDate: "",
      resTime: availableTimes[0],
      guests: "",
      occasion: "",
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (getIsFormValid()) {
      if (window.submitAPI(data.resDate)) {
        submitForm(data.resDate, data.resTime);
      }
      clearForm();
    }
    console.log(e);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const disabledDates = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <main>
      <h2 data-testid="header" className="header">
        Booking a Table
      </h2>
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
              value={data.resDate}
              min={disabledDates()}
              onChange={handleChange}
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
              value={data.resTime}
              onChange={handleChange}
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
              className="inputField"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              aria-label="Number of guests"
              value={data.guests}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="occasion" className="labelForm">
              Occasion
            </label>
            <select
              id="occasion"
              value={data.occasion}
              onChange={handleChange}
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
          <div className="field">
            <button
              className="bookingButton"
              type="submit"
              aria-label="reserve a table"
              disabled={!getIsFormValid()}
            >
              Book a Table
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Booking;
