import "../Pages/HomePage.css"
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import banner from "../assets/banner-image.svg";

export default function HomePage() {
 
  return (
    <section className="homePage-container">
      <Header />
      
      <section className="banner_container">
        <img src={banner} alt={banner} className="banner"/>
      </section>
      <Carousel />
      <Footer/>
    </section>
  );
}
