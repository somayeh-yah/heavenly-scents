import "../Footer/Footer.css";
import Newsletter from "../Newsletter/Newsletter";
import facebook from "../../assets/Facebook.svg";
import linkedin from "../../assets/Linkedin.svg";
import google from "../../assets/Google.svg";
import twitter from "../../assets/Twitter.svg";
import paypal from "../../assets/PayPal.svg";
import masterCard from "../../assets/Mastercard.svg";
import visa from "../../assets/Visa.svg";
import klarna from "../../assets/Klarna.svg";
import amazonPay from "../../assets/AmazonPay.svg";
import googlePay from "../../assets/GooglePay.svg";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <Newsletter />

        <div className="footer_links">
          <div className="footer_column">
            <h3>About us</h3>
            <ul className="about_us">
              <li>
                <a href="/about">Our team</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Help</h3>
            <ul className="help">
              <li className="help">
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/shipping">Delivery information</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Follow us</h3>
            <ul className="social_media_links">
              <li>
                <a href="https://www.facebook.com">
                  <img className="socialIcon_img" src={facebook} alt="" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/home">
                  <img className="socialIcon_img" src={linkedin} alt={linkedin} />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <img className="socialIcon_img" src={twitter} alt={twitter} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="socialIcon_img" src={google} alt={google} />
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section className="footer_payment_options">
            <h2>Payment</h2>

            <div className="payment_options_container">
              <div className="payment_method">
              <img className= "google_payment_icon"src={googlePay} alt={googlePay} />
              </div>

              <div className="separator_footer"></div>

             <div className="payment_method">
              <img src={paypal} alt={paypal} />
              </div>

              <div className="payment_method">
              <img src={ masterCard} alt={masterCard} />
              </div>
             
              <div className="payment_method">
              <img src={amazonPay} alt={amazonPay}/>
              </div>

              <div className="payment_method">
              <img src={visa} alt={visa} />
              </div>

              <div className="payment_method">
              <img src={ klarna} alt={ klarna} />
              </div>
            </div>
        </section>

        <div className="footer_copyright">
          <p>© 2024 Heavenly Scents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
