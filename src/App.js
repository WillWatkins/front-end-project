import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Reviews } from "./Components/Reviews";
import { Comments } from "./Components/Comments";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
  });

  const [reviewId, setReviewId] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Reviews setReviewId={setReviewId} />} />
          <Route
            path="/reviews"
            element={<Reviews setReviewId={setReviewId} />}
          />
          <Route
            path="/reviews/:review_id"
            element={<Comments reviewId={reviewId} />}
          ></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
