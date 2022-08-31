import { useState } from "react";
import "./App.css";
import AgePredictor from "./components/AgePredictor";
import DogBreeds from "./components/DogBreeds";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [showNewsFeed, setShowNewsFeed] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <Header />

        <div className="grid">
          <div className="grid-item">
            <DogBreeds />
          </div>

          <div className="grid-item">
            <h2>Checkboxes</h2>
            <Checkbox label="Test 1" />
            <Checkbox label="Test 2" />
            <Checkbox label="Test 3" />

            <button
              onClick={() => alert("Not implemented")}
              style={{ marginTop: 8 }}
            >
              Select second checkbox
            </button>
            <button onClick={() => alert("Not implemented")}>Reset</button>
          </div>

          <div className="grid-item">
            <AgePredictor />
          </div>

          <div className="grid-item">
            <NewsFeed show={showNewsFeed} setShowNewsFeed={setShowNewsFeed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
