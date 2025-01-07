import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ShopContextProvider } from "./context/ShopContext";
import { DarkModeProvider } from "./context/ThemeContext";


createRoot(document.getElementById("root")).render(

    <StrictMode>
      <ShopContextProvider>
        <DarkModeProvider>
          <App/>
        </DarkModeProvider>
      </ShopContextProvider>
    </StrictMode>

);
