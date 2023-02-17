import { useState } from "react";

function Booking({ availableTimes, submitForm }) {
  const [data, setData] = useState({
    resDate: "",
    resTime: availableTimes[0],
    guests: "",
    occasion: "",
  });

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
    if (data.resDate !== "") {
      if (window.submitAPI(data.resDate)) {
        submitForm(data.resDate, data.resTime);
      }
      clearForm();
    } else {
      window.alert("Please select date.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(value);
  }

  return (
    <main>
      <h2 data-testid="header">Booking a Table</h2>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="resDate">Choose date</label>
            <input
              type="date"
              id="resDate"
              data-testid="resDate"
              name="resDate"
              value={data.resDate}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="resTime"
              data-testid="resTime"
              name="resTime"
              value={data.resTime}
              onChange={handleChange}
            >
              {availableTimes.map((option) => {
                return (
                  <option key={option} value={option} aria-selected="false">
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="2"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={data.guests}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label>Occasion</label>
            <select id="occasion" value={data.occasion} onChange={handleChange}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div className="field">
            <button type="submit" aria-label="reserve a table">
              Book a Table
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Booking;
