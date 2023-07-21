import { Navigate, Route, Routes } from "react-router-dom";
import AdmissionForm from "./components/Admission";
import ResourcePage from "./components/ResourcePage";
import SeminarPage from "./components/Seminars";
import OurTeamPage from "./components/Team";
import HomePage from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/seminars" element={<SeminarPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/admissions" element={<AdmissionForm />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
