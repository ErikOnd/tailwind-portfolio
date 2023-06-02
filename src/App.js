import StartComponent from "./components/StartComponent";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <StartComponent />
      <AboutMeComponent />
      <ProjectsComponent />
    </div>
  );
};

export default App;
