import StartComponent from "./components/StartComponent";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import AboutMeComponent from "./components/AboutMeComponent";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <StartComponent />
      <AboutMeComponent />
    </div>
  );
};

export default App;
