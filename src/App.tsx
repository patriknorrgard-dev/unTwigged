import Navigation from "./components/navigation/Navigation";
import { Outlet } from "@tanstack/react-router";
import "./assets/scss/App.scss";

function App() {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App;
