import "../Newsletter/Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter_container">
        <h2 id="newsletter-title" className="newsletter_title">
          Subscribe to our newsletter
        </h2>
        <hr className="newsletter_divider" />
        
        <p className="newsletter_description">
        Want to get updates and offers before everyone else? Fill in your
          email and click send and we will take care of the rest.
        </p>
        
        <form className="newsletter_form" action="#" method="post">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            
          />
          
          <button type="submit" className="newsletter_button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
