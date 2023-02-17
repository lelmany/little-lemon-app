import Booking from "../components/Booking";

function BookingPage({ availableTimes, submitForm }) {
  return (
    <section>
      <Booking
        availableTimes={availableTimes}
        submitForm={submitForm}
      ></Booking>
    </section>
  );
}

export default BookingPage;
