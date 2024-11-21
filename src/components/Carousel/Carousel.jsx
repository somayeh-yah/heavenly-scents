import "../Carousel/Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const slides = [
  {
    src: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 1 for carousel",
    sizes:"(max-width: 600px) 100vw, 50vw"
  },
  {
    src: "https://images.pexels.com/photos/21547037/pexels-photo-21547037/free-photo-of-solglasogon-tillbehor-modefotografi-kosmetika.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 2 for carousel",
    sizes:"(max-width: 600px) 100vw, 50vw"
  },
  {
    src: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 3 for carousel",
    sizes:"(max-width: 600px) 100vw, 50vw"
  },
  {
    src: "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 4 for carousel",
    sizes:"(max-width: 600px) 100vw, 50vw"
  },
];

export default function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length -1? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0? slides.length : slides - 1);
  };
  return (
   
  
      <section className="carousel_wrapper">
        <div className="carousel_container">
      <BsArrowLeftCircleFill className="arrow arrow_left" onClick={prevSlide} />
      {slides.map((item, i) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={i}
            className={
              slide === i
                ? "carousel_item"
                : "carousel_item carousel_item_hidden"
            }
          ></img>
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow_right" onClick={nextSlide} />
      <span className="markers">
        {slides.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={
                slide === i ? "markers_btn" : "markers_btn markers_btn_inactive"
              }
            ></button>
          );
        })}
      </span>
      </div>
      </section>
   
  );
}
