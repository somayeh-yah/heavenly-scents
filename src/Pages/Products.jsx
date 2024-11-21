import "./Products.css";
import { useState, useEffect } from "react";
import { productData } from "../productsData";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const productComponents = productData.map((product, id) => {
      return (
        <Product key={id} data={product}/>
      );
    });
    setProducts(productComponents)
  }, []);
  return (
    <>
    <Header/>
    
  <section className="products_container">
   {products}
  </section>
  <Footer/>
  </>
)};
