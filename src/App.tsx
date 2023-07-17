import AdmissionForm from "./components/Admission";
import ResourcePage from "./components/ResourcePage";
import SeminarPage from "./components/Seminars";
import OurTeamPage from "./components/Team";
import HomePage from "./components/Home";
import HeaderPage from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route path="/seminar" element={<SeminarPage />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
