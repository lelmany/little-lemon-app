import Button from "./Button";

function CallToAction() {
  return (
    <article className="mainContent">
      <section className="mainText">
        <h2 className="title">Little Lemon</h2>
        <h3 className="subtitle">Chicago</h3>
        <p className="description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a Table</Button>
      </section>
      <img
        className="restaurantPhoto"
        src="/icons_assets/restauranfood.jpeg"
        alt="restaurant food"
        width="300px"
      ></img>
    </article>
  );
}

export default CallToAction;
