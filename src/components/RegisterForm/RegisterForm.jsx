import useForm from "../useForm/useForm";
import validateInfo from "../validateInfo/validateInfo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./RegisterForm.css";
export default function RegisterForm() {
    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo);
  return (
    <>
    <Header/>
    
    <section className="form_container">
       <div className="form_go_back_link_container">
        <a className="go_back_link" href="/" >Go back</a>
        </div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Create your account by filling out the information below and hit the
          signup button.
        </h1>
        <div className="form_inputs">
          <label htmlFor="username" className="form_label"> Username</label>

          <input
            type="text"
            name="username"
            className="form_input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form_inputs">
          <label htmlFor="email" className="form_label">Email</label>
          <input
            type="email"
            name="email"
            className="form_input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
           {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form_inputs">
          <label htmlFor="password" className="form_label">Password</label>
          <input
            type="password"
            name="password"
            className="form_input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <p className="error">{errors.password}</p>}
        </div>
        
        <div className="form_inputs">
          <label htmlFor="password2" className="form_label">Confirm Password</label>
          <input
            type="password2"
            name="password2"
            className="form_input"
            placeholder="Repeat password"
            value={values.password2}
            onChange={handleChange}
          />
           {errors.password2 && <p className="error">{errors.password2}</p>}
        </div>
        <button className="register_form_btn" type="submit">Sign Up</button>
        <span className="form_input_login">Already have an account? Login <a href="/login" className="navigate_to_login_link">here</a></span>
      </form>
    </section>
    <Footer/>
    </>
  );
}
