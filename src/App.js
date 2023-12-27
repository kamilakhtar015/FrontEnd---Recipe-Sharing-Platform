import Home from "./screens/Home";
import './App.css'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Login from "./screens/Login";
import Explore from "./screens/Explore";
import SignUp from "./screens/SignUp";
function App() {
  return(
    <Router>
      <div> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
