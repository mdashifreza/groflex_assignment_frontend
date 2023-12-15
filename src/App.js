import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from './Components/SignIn';
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegistrationForm";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
import Records from "./Components/Records";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path = "*" element = { <Home/> } />
          <Route path = "/signup" element = { <SignUp/> }/>
          <Route path = "/signin" element = { <SignIn/> } />
          <Route path = '/records' element = { <Records/> } />
          <Route path = "/registration/:username" element = {<RegistrationForm/> } />
          <Route path = "/profile" element = { <Profile/> } />
        </Routes>
    </Router>
  );
}
export default App;
