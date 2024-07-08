import React from "react";
import "./styles.css";

const AutoSuggestionList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlitedText = (text, highlighted) => {
    const parts = text.split(new RegExp(`(${highlighted})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlighted.toLowerCase() ? (
            <b key={index} className="highlighted-text">
              {part}
            </b>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <>
      {suggestions.map((suggestionItem, index) => {
        const currentSuggestion = dataKey
          ? suggestionItem[dataKey]
          : suggestionItem;
        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestionItem)}
            className="suggestion-list-li"
          >
            {getHighlitedText(currentSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default AutoSuggestionList;
