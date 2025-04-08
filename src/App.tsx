import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/id-card-verification"} />} />
        <Route path="/id-card-verification" element={<Home checkpointId="id-card-verification" />} />
        <Route path="/first-aid-kit" element={<Home checkpointId="first-aid-kit" />} />
        <Route path="/barricade-site" element={<Home checkpointId="barricade-site" />} />
        <Route path="/ne-voltage-check" element={<Home checkpointId="ne-voltage-check" />} />
        <Route path="/tools-safety" element={<Home checkpointId="tools-safety" />} />
        <Route path="/derrick" element={<Home checkpointId="derrick" />} />
      </Routes>
    </>
  )
}
export default App;
