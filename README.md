###TYPE-AHEAD ***RECIPE-AUTO-SUGGESTION-COMPONENT***

# ***[Project Link Down below](https://recipe-auto-suggestion.netlify.app)***
# ***https://recipe-auto-suggestion.netlify.app***

# Recipe Auto-Suggestion Component

## Overview

The Recipe Auto-Suggestion Component provides a user-friendly interface for real-time recipe suggestions based on user input. This component enhances user experience by providing efficient, real-time suggestions while minimizing unnecessary API calls and handling errors gracefully.

## Key Features

### Auto-Suggestion
- **Provides real-time suggestions based on user input.**
  - Fetches suggestions from an API or filters from a static list.

### Debouncing
- **Reduces the number of API calls by waiting for a specified period before fetching suggestions after the user stops typing.**
  - Check the Network Tab to see the reduced number of API calls.

### Caching
- **Stores previously fetched suggestions to avoid redundant API calls and improve performance.**
  - Type the same query for searched recipes to check if the API is getting called or showing the cached suggestion.

### Highlighting
- **Highlights the matching part of the suggestion text based on the user input for better visibility.**

### Error Handling
- **Displays error messages when the network request fails, a response error or no result is found.**

### Loading Indicator
- **Shows a loading message while fetching suggestions from the API.**

![Master Task Project Screenshot](https://github.com/pritdk533/pritam-portfolio-2024/blob/main/images/Auto-Type-Ahead.png)
