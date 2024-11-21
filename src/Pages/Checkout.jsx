import "./Checkout.css";
import "../Pages/Checkout.css";
import { useContext } from "react";
import useForm from "../components/useForm/useForm";
import validateInfo from "../components/validateInfo/validateInfo";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { productData } from "../productsData";
import { ShopContext } from "../context/ShopContext";
import cardIcon from "../assets/Visa.svg";

export default function Checkout() {
  const {
    cartItems,
    calcTotalSum,
    removeFromCart,
    addToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  // const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

  const totalSum = calcTotalSum();
  const selectedProducts = productData.filter(
    (product) => cartItems[product.id] > 0
  );

  return (
    <>
      <Header />

      <section className="checkout_page">
        <div className="checkout_go_back_link_container">
          <a className="checkout_go_back_link" href="/products">
            Go back
          </a>
        </div>
        <div className="checkout_left">
          <div className="cart_items_container">
            <h2 className="checkout_header">Your Order</h2>
            <div className="checkout_selected_products">
              {selectedProducts.map((product) => (
                <section key={product.id} className="selected_products_content">
                  <img className="img_item" src={product.image} alt="image"/>
                  <h2 className="pro_title">{product.title}</h2>
                  <p className="pro_price">
                    <b>{product.price}</b> kr
                  </p>

                  <div className="quantity_container">
                    <img
                      src={arrowUp}
                      alt="increase"
                      onClick={() => addToCart(product.id)}
                      className="quantity_icon"
                    />
                    <input
                      className="item_quantity"
                      value={cartItems[product.id]}
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), product.id)
                      }
                    />
                    <img
                      src={arrowDown}
                      alt="decrease"
                      onClick={() => removeFromCart(product.id)}
                      className="quantity_icon"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <div className="delivery_page">
          <h2 className="checkout_header">Delivery Information</h2>
          <form className="delivery_form">
            <div className="checkout_form_input">
              <label htmlFor="name" className="checkout_label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="card_input"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="email" className="checkout_label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="card_input"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="phone" className="checkout_label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="card_input"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="state" className="checkout_label">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                className="card_input"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="address" className="checkout_label">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="card_input"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="zip" className="checkout_label">
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                placeholder="Enter your zip code"
                className="card_input"
              />
            </div>
          </form>
          <h2 className="checkout_header">Payment</h2>
          <form className="Payment_form">
            <div className="checkout_form_input">
              <label htmlFor="cardholder" className="checkout_label">
                Cardholder's Name
              </label>
              <input
                type="text"
                id="cardholder"
                className="card_input"
                placeholder="Cardholder's name"
              />
            </div>
            <div className="checkout_form_input">
              <label htmlFor="cardnumber" className="checkout_label">
                Card Number
              </label>
              <input
                type="text"
                id="cardnumber"
                className="card_input"
                placeholder="xxxx xxxx xxxx xxxx"
              />
              <img src={cardIcon} alt="Card icon" className="input_icon" />
            </div>
            <div className="checkout_form_input_row">
              <div className="checkout_form_input_half">
                <label htmlFor="expiry" className="checkout_label">
                  Expiry
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="card_input"
                />
              </div>

              <div className="checkout_form_input_half">
                <label htmlFor="cvv" className="checkout_label">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  className="card_input"
                />
              </div>
            </div>
            <div className="pay_button_section">
              <button className="pay_button" type="button">
                Pay
              </button>
            </div>
          </form>
        </div>

        <div className="total_section">
          <div className="total_summery">
            <p>Total: {totalSum} kr</p>
            <p>Delivery: 0 kr</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
