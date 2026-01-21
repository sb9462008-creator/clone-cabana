import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <BrowserRouter>
      <div className="antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
