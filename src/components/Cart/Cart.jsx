import "./Cart.css";
import { Link } from "react-router-dom";
import favoriteIcon from "../../assets/favorite-icon.svg";
import shoppingIcon from "../../assets/shopping-bag-icon.svg";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
export default function Cart() {
  const { totalItemsInCart } = useContext(ShopContext);
  return (
    <section className="cart_icons_container">
      <img className="fav-icon" src={favoriteIcon} alt={favoriteIcon} />
      <div className="shoppingBag_container">
        <Link to={"/order"}>
          <img className="shop-icon" src={shoppingIcon} alt={shoppingIcon} />
        </Link>

        <span className="cart_count">{totalItemsInCart}</span>
      </div>
    </section>
  );
}
