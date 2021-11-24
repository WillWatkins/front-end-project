import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Reviews } from "./Components/Reviews";
import { Comments } from "./Components/Comments";
import { useState } from "react";

function App() {
  const [reviewId, setReviewId] = useState("");
  console.log(reviewId);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Reviews setReviewId={setReviewId} />} />
        <Route
          path="/comments"
          element={<Comments reviewId={reviewId} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
