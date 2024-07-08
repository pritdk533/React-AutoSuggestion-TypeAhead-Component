import React from "react";
import AutoSuggestionComponent from "./components/Auto-Suggestion-Component";
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
        <div className="features">
          <h3> Key Feature's of Recipe Auto-Suggestion Component : </h3>
          <ul>
            <li>
              <p>Auto-Suggestion :</p>
              <ul>
                <li>- Provides real-time suggestions based on user input.</li>
                <li>
                  - Fetches suggestions from an API or filters from a static
                  list.
                </li>
              </ul>
            </li>
            <li>
              <p>Debouncing :</p>
              <ul>
                <li>
                  - Check Network Tab to see the reduced number of API's Calls :
                  Reduces the number of API calls by waiting for a specified
                  period before fetching suggestions after the user stops
                  typing.
                </li>
              </ul>
            </li>
            <li>
              <p>Caching :</p>
              <ul>
                <li>
                  - Stores previously fetched suggestions to avoid redundant API
                  calls and improve performance.
                </li>
                <li>
                  - Type the Same Query for searched Recipe to check if API's
                  getting called or it's showing the cached suggestion
                </li>
              </ul>
            </li>
            <li>
              <p>Highlighting :</p>
              <ul>
                <li>
                  - Highlights the matching part of the suggestion text based on
                  the user input for better visibility.
                </li>
              </ul>
            </li>
            <li>
              <p>Error Handling :</p>
              <ul>
                <li>
                  - Displays error messages when the network request fails,
                  response error or no result found.
                </li>
              </ul>
            </li>
            <li>
              <p>Loading Indicator :</p>
              <ul>
                <li>
                  - Shows a loading message while fetching suggestions from the
                  API.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <AutoSuggestionComponent
          // staticData={staticData}
          placeholder={"Enter Recipes"}
          fetchSuggestion={fetchSuggestionList}
          dataKey={"name"}
          customLoadingProps={<>Loading Recipes...</>}
        />
      </div>
    </>
  );
}

export default App;
