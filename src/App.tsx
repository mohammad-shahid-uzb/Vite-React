import AdmissionForm from "./components/Admission";
import ResourcePage from "./components/ResourcePage";
import SeminarPage from "./components/Seminars";
import OurTeamPage from "./components/Team";
import HomePage from "./components/Home";
//import HeaderPage from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* <HeaderPage /> */}
      <Routes>
        <Route path="/seminars" element={<SeminarPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/admissions" element={<AdmissionForm />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
