
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import { watchCinema } from "./components/site/cinema";
  import "./index.css";
  import "./styles/premium.css";
  import "./styles/cinema.css";

  watchCinema();

  createRoot(document.getElementById("root")!).render(<App />);
