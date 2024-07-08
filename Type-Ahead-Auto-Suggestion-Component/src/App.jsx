import React from "react";
import AutoSuggestionComponent from "./components/Auto-Suggestion-Component";
import FeaturesDetail from "./components/featuresDetail";
import "./components/styles.css";

function App() {
  const staticData = [
    "Tomato",
    "Potato",
    "Red Chilli",
    "Garlic",
    "Onion",
    "Peas",
    "Ginger",
    "Olives",
    "Salt",
    "Rice",
  ];

  const fetchSuggestionList = async (query) => {
    const url = `https://dummyjson.com/recipes/search?q=${query}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network Response Was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <>
      <div className="App">
        <h1 className="App-h1">
          Type Ahead - <span>Auto-Suggestion Component</span>
        </h1>

        <AutoSuggestionComponent
          // staticData={staticData}
          placeholder={"Enter Recipes"}
          fetchSuggestion={fetchSuggestionList}
          dataKey={"name"}
          customLoadingProps={<>Loading Recipes...</>}
        />
        <FeaturesDetail />
      </div>
    </>
  );
}

export default App;
