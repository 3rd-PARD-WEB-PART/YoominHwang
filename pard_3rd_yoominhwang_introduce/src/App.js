import { LuInstagram } from "react-icons/lu";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/myphoto.jpg" className="my-photo" alt="Photo" />
        <h1>
          황유민
        </h1>
      </header>
      <div className="App-bottom">
      <a
        className="App-link"
        href="https://www.instagram.com/yooominh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuInstagram />
        <br/>
        My Instagram
      </a>
      </div>
    </div>
  );
}

export default App;
