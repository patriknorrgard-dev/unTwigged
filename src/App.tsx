import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/navigation/navigation";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import "./assets/scss/App.scss";

function App() {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:username" element={<PortfolioPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:username" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App;
