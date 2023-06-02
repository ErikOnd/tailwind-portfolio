import StartComponent from "./components/StartComponent";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import ContentPart from "./components/ContentPart";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <StartComponent />
      <ContentPart />
    </div>
  );
};

export default App;
