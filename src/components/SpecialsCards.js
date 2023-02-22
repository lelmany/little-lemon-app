import "../styles/SpecialsCards.css";
import "../styles/App.css";
import specialFoodData from "./specialFoodData";
import { MdMoped } from "react-icons/md";

function SpecialsCards() {
  return specialFoodData.map((foodItem, index) => {
    return (
      <section key={foodItem.id} className="cardBox">
        <div className="card">
          <img
            src={foodItem.img}
            alt={foodItem.title}
            className="foodPhoto"
          ></img>
          <div className="cardItem">
            <div className="priceSection">
              <h2 className="cardTitle">{foodItem.title}</h2>
              <p className="price">{foodItem.price}</p>
            </div>
            <p className="foodDesription">{foodItem.description}</p>
            <div className="delivery">
              <p className="orderDelivery">
                Order a delivery
                <span className="icon">
                  <MdMoped />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  });
}

export default SpecialsCards;
