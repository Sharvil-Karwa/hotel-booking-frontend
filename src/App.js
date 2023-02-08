import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Roomscreen from "./screens/Roomscreen";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/room/:id" element={<Roomscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
