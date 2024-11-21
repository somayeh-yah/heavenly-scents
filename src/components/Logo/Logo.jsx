import "../Logo/Logo.css"
import logoIcon from  "../../assets/logo.svg";
export default function Logo() {
  return (
    <div className="logo_container">
      <a href="/">
      <img className= "logo" src={logoIcon} alt={logoIcon} />
      
        </a>
    </div>
  )
}
