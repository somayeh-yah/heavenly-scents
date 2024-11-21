import "./Order.css";
import { useContext} from "react";
import { productData } from "../productsData";
import { ShopContext } from "../context/ShopContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartItem from "../components/CartItem/CartItem";
import shopIcon from "../assets/shopping-bag-icon.svg";
import { useNavigate } from "react-router-dom";
export default function Order() {
  const { cartItems, calcTotalSum} = useContext(ShopContext);
  const totalSum = calcTotalSum();
  const navigate = useNavigate();

 
  return (
    <>
    <Header/>
    <section className="cart_items">
      <div>
        <div className="go_back_link_container">
        <a className="go_back_link" href="/products" >Go back</a>
        </div>
      
       <div className="order_page_header">

      
        <h1 className="order_page_title" ><img className="shopping_icon" src={shopIcon} alt="shopping icon" /> Shoppingbag</h1>
        </div>
      </div>
    
      <div className="cart">
        {productData.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          
        })}
      </div>
    <div className="checkout">
      {totalSum > 0? (
        <div >
            <p>Total: {totalSum} kr</p>
          

           
            <button onClick={()=> navigate("/products")}>Continue shopping</button>
            <button onClick={() => navigate("/checkout")}>CheckOut</button>
           
       
        </div>
   
      ): (
         <h1 className="empty_shopping_cart">Your shopping cart is empty</h1>
      )}
       </div>
    </section>
    <div className="divider_shopping_cart"></div>
    <Footer/>
    </>
  );
}
