import StartComponent from "./components/StartComponent";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <StartComponent />
    </div>
  );
};

export default App;
