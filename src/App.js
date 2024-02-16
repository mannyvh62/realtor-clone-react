 import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
 import Home from "./pages/Home";
 import Profile from "./pages/Profile";
 import SignIn from "./pages/SignIn";
 import SignUp from "./pages/SignUp";
 import ForgotPassword from "./pages/ForgotPassword";
 import Offers from "./pages/Offers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>   <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-Up" element={<SignUp/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/Offers" element={<Offers/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
