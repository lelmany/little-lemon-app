import "../styles/ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <div className="bookingPage">
      <p className="confirmation">
        Your booking has been succesfully confirmed.
        <br />
        Your confirmation number is{" "}
        <span className="confirmationNumber">
          {Math.trunc(Math.random() * 10000)}.
        </span>
      </p>
    </div>
  );
}

export default ConfirmedBooking;
