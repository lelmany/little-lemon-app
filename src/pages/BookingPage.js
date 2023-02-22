import BookingForm from "../components/booking/BookingForm";

function BookingPage({ availableTimes, submitForm }) {
  return (
    <section>
      <h2 data-testid="header" className="header">
        Booking a Table
      </h2>
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
      ></BookingForm>
    </section>
  );
}

export default BookingPage;
