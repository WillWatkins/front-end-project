import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Reviews } from "./Components/Reviews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
