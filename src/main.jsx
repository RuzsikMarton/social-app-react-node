import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <AuthContextProvider>
          <App />
    </AuthContextProvider>
  </DarkModeContextProvider>
);
