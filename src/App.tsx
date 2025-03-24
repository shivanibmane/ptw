import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/id-card-verification"} />} />
        <Route path="/id-card-verification" element={<Home checkpointId="id-card-verification" />} />
        <Route path="/first-aid-kit" element={<Home checkpointId="first-aid-kit" />} />
      </Routes>
    </>
  )
}
export default App;
