import './css/App.css';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Profile from './Pages/ProfilePage/Profile';
import EditProfile from './Pages/EditPage/EditProfile';
import NavBar from './Pages/Component/Layout'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route element={<NavBar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
        </Route>
        {/* <Route element={<NavBar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
        </Route>
        <Route
          path="/profile"
          element={
            <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/" elelemt={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
