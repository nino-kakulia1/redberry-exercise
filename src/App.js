import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/hero-section";
import PersonalInfo from "./components/personal-info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
