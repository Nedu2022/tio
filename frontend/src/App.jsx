import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginAuth/Login";
import Registration from "./Components/RegisAuth/RegAuth";
import RelationshipBookingPage from "./Components/ServiceComponent/Relationship/Relationship";
import EsteemBookingPage from "./Components/ServiceComponent/Esteem/Esteem";
import FamilyBookingPage from "./Components/ServiceComponent/Family/Family";
import CareerBookingPage from "./Components/ServiceComponent/Career/Career";
import AnxietyBookingPage from "./Components/ServiceComponent/Anxiety/Anxiety";
import YoungBookingPage from "./Components/ServiceComponent/Young/Young";
import CustomCursor from "./Components/CustomCursor";


function App() {
  return (
    <><CustomCursor /><Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/dating-relationship" element={<RelationshipBookingPage />} />
        <Route path="/services/self-esteem" element={<EsteemBookingPage />} />
        <Route path="/services/family-psycology" element={<FamilyBookingPage />} />
        <Route path="/services/career-counseling" element={<CareerBookingPage />} />
        <Route path="/services/anxiety-grief" element={<AnxietyBookingPage />} />
        <Route path="/young-adult" element={<YoungBookingPage />} />
      </Routes>
    </Router></>
  );
}

export default App;
