import "./App.css";
import meme from "./assets/img2.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>

      <div>
        <img src="/img1.jpg" alt="paisagem-anime" />
      </div>
      <div>
        <h2>Segue aii a piada que é a IA rsrs</h2>
        <img src={meme} alt="meme" />
      </div>
    </div>
  );
}

export default App;
