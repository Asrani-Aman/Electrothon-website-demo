import logo from "./assets/img/spec logo white (1)-3.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import NewMilestone from "./components/new_milestones/newMilestone";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <NewMilestone />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
