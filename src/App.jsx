import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import RegistrationPage from "./Components/Registration/Registration";
import LoginPage from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
