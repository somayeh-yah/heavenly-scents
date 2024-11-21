import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import deleteBtn from "../../assets/delete-btn.svg";
// import "../../Pages/Order.css";
import "./CartItem.css";
export default function CartItem(props) {
  const { id, title, brand, price, image, isFavorite, quantity } = props.data;
  const { cartItems, removeFromCart, addToCart, updateCartItemCount} =
    useContext(ShopContext);

  return (
    <section className="cart_item_container">
     <img className ="delete_button" src={deleteBtn} alt="delete button" onClick={() => removeFromCart(id)}/>
      <img className="image_item" src={image} alt="product image" />
      <h2 className="product_title">{title}</h2>
      <p className="item_price">
        <b>{price}</b> kr
      </p>
      
        <div className="quantity_container">
          <img
            src={arrowUp}
            alt="increase"
            onClick={() => addToCart(id)}
            className="quantity_icon"
          />
          <input
            className="item_quantity"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <img
            src={arrowDown}
            alt="decrease"
            onClick={() => removeFromCart(id)}
            className="quantity_icon"
          />
        </div>
    
    </section>
  );
}
