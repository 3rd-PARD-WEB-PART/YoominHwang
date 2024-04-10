import './App.css';
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="logocontainer">
          <img src="/logo.png" className="logo" alt="Today Home" />
        </div>
        <div className="container">
        <ProfilePage />
        {/* <RegisterPage /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
