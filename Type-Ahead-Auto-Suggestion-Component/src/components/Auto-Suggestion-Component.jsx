import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import AutoSuggestionList from "./Auto-Suggestion-List";
import useDebounce from "../hooks/customUseDebounceHooks";
import useCache from "../hooks/useCacheHook";

const AutoSuggestionComponent = ({
  placeholder,
  staticData,
  fetchSuggestion,
  dataKey,
  customLoadingProps,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const debouncedInputValue = useDebounce(inputValue, 500);
  const { getCachedData, setCachedData } = useCache();

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const getSuggestionsHandler = useCallback(
    async (query) => {
      if (!query) {
        setSuggestions([]);
        setResponse(false);
        return;
      }

      const cachedSuggestions = getCachedData(query);
      if (cachedSuggestions) {
        setSuggestions(cachedSuggestions);
        setResponse(false);
        return;
      }

      setError(null);
      setLoading(true);
      try {
        let result;
        if (staticData) {
          result = staticData.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          );
        } else if (fetchSuggestion) {
          result = await fetchSuggestion(query);
          if (!result || result.length === 0) {
            setResponse(true);
            setSuggestions([]);
          } else {
            setResponse(false);
            setSuggestions(result);
            setCachedData(query, result);
          }
        }
      } catch (error) {
        setError("Failed to fetch Suggestions");
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    },
    [staticData, fetchSuggestion, getCachedData, setCachedData]
  );

  useEffect(() => {
    if (debouncedInputValue.length > 1) {
      getSuggestionsHandler(debouncedInputValue);
    } else {
      setSuggestions([]);
      setResponse(false);
    }
  }, [debouncedInputValue, getSuggestionsHandler]);

  const onSuggestionClickHandler = (suggestion) => {
    const suggestionValue = dataKey ? suggestion[dataKey] : suggestion;
    setInputValue(suggestionValue);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        style={customStyles}
        placeholder={placeholder}
        onChange={inputChangeHandler}
      />
      {suggestions.length > 0 || loading || error || response ? (
        <ul className="suggestion-list-ul">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">{customLoadingProps}</div>}
          {!loading && response && (
            <div className="no-response">No Results Found</div>
          )}
          <AutoSuggestionList
            suggestions={suggestions}
            highlight={inputValue}
            dataKey={dataKey}
            onSuggestionClick={onSuggestionClickHandler}
          />
        </ul>
      ) : null}
    </div>
  );
};

export default AutoSuggestionComponent;
