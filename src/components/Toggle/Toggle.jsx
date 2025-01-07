import "../Toggle/Toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

const Toggle = () => {
  const {isDark, toggleDarkMode} = useContext(ThemeContext);

  return (
<div className="dark_mode">
  <input
    type="checkbox"
    id="darkmode-toggle"
    className="dark_mode_input"
    onChange={toggleDarkMode}
    checked={isDark}
  />
  <label htmlFor="darkmode-toggle" className="dark_mode_label">
    <img
      src={isDark ? Moon : Sun}
      alt="theme-toggle"
      className="icon"
    />
  </label>
</div>
  );
};

export default Toggle;

