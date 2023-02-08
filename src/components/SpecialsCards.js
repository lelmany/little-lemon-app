import "../SpecialsCards.css";
import { MdMoped } from "react-icons/md";

const specialFood = [
  {
    id: "12445",
    title: "Greek salad",
    img: "/icons_assets/greek salad.jpg",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: "55880",
    title: "Bruchetta",
    img: "/icons_assets/bruchetta.svg",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: "68790",
    title: "Lemon Dessert",
    img: "/icons_assets/lemon dessert.jpg",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function SpecialsCards() {
  return specialFood.map((food, index) => {
    return (
      <section key={food.id} className="specialsFood">
        <section className="card">
          <img src={food.img} alt={food.title} className="foodPhoto"></img>
          <article className="cardItem">
            <div className="priceSection">
              <h2>{food.title}</h2>
              <p className="price">{food.price}</p>
            </div>
            <p className="description">{food.description}</p>
            <div className="delivery">
              <p className="orderDelivery">Order a delivery</p>
              <MdMoped />
            </div>
          </article>
        </section>
      </section>
    );
  });
}

export default SpecialsCards;
