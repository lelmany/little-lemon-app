import { Link } from "react-router-dom";
import "../../styles/ConfirmedBooking.css";
import Button from "../Button";

function ConfirmedBooking() {
  return (
    <div className="bookingPage">
      <div className="confirmationSection">
        <p className="confirmation">
          Your booking has been succesfully confirmed.
          <br />
          Your confirmation number is{" "}
          <span className="confirmationNumber">
            {Math.trunc(Math.random() * 10000)}.
          </span>
          <br />
          <span className="emoji">🥳</span>
        </p>
      </div>
      <div>
        <Link to="/" className="list">
          <Button className="button">OK</Button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
