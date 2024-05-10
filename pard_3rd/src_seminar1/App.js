import Name from "./Name";
import Email from "./Email";
import Button from "./Button";
import Message from "./Message";
import "./Form.css";

function App() {
  return (
    <div className="app">
      <Name />
      <Email />
      <Message />
      <Button />
    </div>
  );
}

export default App;