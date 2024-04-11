import './css/App.css';
import {Route, Routes} from 'react-router-dom';
import Profile from './Pages/ProfilePage/Profile';
import EditProfile from './Pages/EditPage/EditProfile';
import NavBar from './Pages/Component/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<EditProfile />} />
        </Route>
      </Routes>

      {/* Register Page */}
      {/* <div className="Wrapper">
        <div className="logocontainer">
          <img src="/logo.psng" className="logo" alt="Today Home" />
        </div>
        <div className="container">
        <RegisterPage />
        </div>
      </div> */}
    </div>
  );
}

export default App;
