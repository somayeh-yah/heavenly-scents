import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { productData } from "../productsData";
import likeIcon from "../assets/favorite-icon.svg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import shoppingBag from "../assets/shopping-bag-icon.svg";
import "./ProductDetail.css";
export default function ProductDetail() {
  const { title } = useParams();
  const { sizeOptions, handelProdectSize, addToCart } = useContext(ShopContext);
  const selectedProduct = productData.find(
    (product) => product.title === title
  );

  const handleSizeChange = (e) => {
    handelProdectSize(selectedProduct.id, e.target.value);
  };

  return (
    <>
      <Header />
      {selectedProduct ? (
        <section className="product_detail">
          <div className="go_back_link_container">
            <a className="go_back_link" href="/products">
              Go back
            </a>
          </div>
          <div className="img_container">
            <img src={selectedProduct.image} alt="product image" />
            <div className="product_icons">
              <div className="icon_like">
                <img className="icon" src={likeIcon} alt="like icon" />
              </div>
              <div className="icon_shoppingbag">
                <img className="icon" src={shoppingBag} alt="shopping bag" />
              </div>
            </div>
          </div>
          <div className="product_detail_info">
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.brand}</p>
            <p>
              <b>{selectedProduct.price} </b>kr
            </p>
          </div>

          <section className="drop_down_container">
            <select
              id="select_size"
              value={sizeOptions[selectedProduct.id] || ""}
              onChange={handleSizeChange}
            >
              {selectedProduct.sizes.map((size, i) => (
                <option key={i} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </section>
          <button
            className="detail_product_button"
            onClick={() => addToCart(selectedProduct.id)}
          >
            Add to cart
          </button>
        </section>
      ) : (
        <h2>Ingen produkt vald</h2>
      )}
      <div className="divider_product_details"></div>

      <Footer />
    </>
  );
}
