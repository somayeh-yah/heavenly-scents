import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import searchIcon from "../../assets/search_icon.svg";
import navIcon from "../../assets/MenuButton.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null)
  
   useEffect(()=>{
    const closeMenuHandler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setIsOpen(false);
      }
     
    }
  
    document.addEventListener("mousedown",closeMenuHandler )
  })

 

  const handleGoToProductsPage = () => {
    navigate("/products");
  }

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="navbar_container">
        <nav  ref={menuRef} className="navBar">
      
          <ul  className={isOpen? "nav-link active": "nav-link"}>
        
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a  onClick={handleGoToProductsPage}>Products</a>
            </li>
            <li>
              <a href="/hair">Parfume</a>
            </li>
            <li>
              <a href="/parfume">Body</a>
            </li>
            <li>
              <a href="/skincare">Skin care</a>
            </li>
            <li>
              <a href="/body">News</a>
            </li>
            <li>
              <a href="/aboutUs">About us</a>
            </li>
            <li>
              <a href="/contactUs">Contact us</a>
            </li>
            <li>
              <a  href="/serach"><img className="search_icon" src={searchIcon} alt={searchIcon} />Search</a>
            </li>
           
          </ul>
          <div>
              <img
              style={{width:"3rem"}}
                onClick={toggleDropDown}
                className="menu-icon"
                src={navIcon}
                alt={navIcon}
              />
            </div>
        </nav>
      </section>

    </>
  );
}
