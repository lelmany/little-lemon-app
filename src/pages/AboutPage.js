import "../styles/App.css";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <section className="aboutPage">
      <h2>About Little Lemon Restaurant</h2>
      <div className="about">
        <p> Meet our owners Mario and Adrian</p>
      </div>
      <img
        src="/icons_assets/Mario and Adrian b.jpg"
        width="500px"
        alt="photo of owners Mario and Adrian"
        className="ownersPhoto"
      ></img>
    </section>
  );
}

export default AboutPage;
