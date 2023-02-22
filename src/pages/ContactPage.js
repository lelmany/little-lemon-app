import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <section className="contactContainer">
      <div className="contactSection">
        <h3 className="contactHeading">Our Adress:</h3>
        <p className="contactInfo">Chicago, Main Street, 123</p>
      </div>
      <div className="contactSection">
        <h3 className="contactHeading">Our Email:</h3>
        <p className="contactInfo"> littlelemon@mail.com</p>
      </div>
      <div className="contactSection">
        <h3 className="contactHeading">Our Contact Telephone:</h3>
        <p className="contactInfo"> +1 1242289111</p>
      </div>
    </section>
  );
}
export default ContactPage;
