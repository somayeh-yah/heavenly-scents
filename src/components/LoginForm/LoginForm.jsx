import "../RegisterForm/RegisterForm.css";
import useForm from "../useForm/useForm";
import validateInfo from "../validateInfo/validateInfo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function LoginForm() {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  return (
    <>
    <Header/>
    <section className="form_container">
       <div className="form_go_back_link_container">
        <a className="go_back_link" href="/" >Go back</a>
        </div>

      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Sign in in your account by filling out the information below and hit
          the Sign in button.
        </h1>
        <div className="form_inputs">
          <label htmlFor="email" className="form_label">
            Email
          </label>
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
          <label htmlFor="password" className="form_label">
            Password
          </label>
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

        <button className="register_form_btn" type="submit">Sign In</button>
        <span className="form_input_login">No account yet? Sign Up <a href="/register" className="navigate_to_login_link">here</a></span>
      </form>
    </section>
    <Footer/>
    </>
  );
}
