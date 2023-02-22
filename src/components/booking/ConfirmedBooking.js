import { Link } from "react-router-dom";
import "../../styles/ConfirmedBooking.css";
import Button from "../Button";

function ConfirmedBooking() {
  return (
    <div className="bookingPage">
      <div className="confirmationSection" data-testid="confirmedMessage">
        Your booking has been succesfully confirmed.
      </div>
      <div className="confirmationSection">Your confirmation number is</div>
      <div className="confirmationSection">
        {" "}
        <span className=" confirmationNumber">
          {Math.trunc(Math.random() * 10000)}.
        </span>
      </div>
      <div className=" confirmation emoji">🥳</div>
      <div>
        <Link to="/" className="list">
          <Button className="button">OK</Button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
