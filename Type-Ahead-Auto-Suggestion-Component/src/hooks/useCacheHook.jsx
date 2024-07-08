// hooks/useCache.js
import { useState, useCallback } from "react";

const useCache = () => {
  const [cache, setCache] = useState({});

  const getCachedData = useCallback((key) => cache[key], [cache]);

  const setCachedData = useCallback(
    (key, value) => {
      setCache((prevCache) => ({ ...prevCache, [key]: value }));
    },
    [setCache]
  );

  return { getCachedData, setCachedData };
};

export default useCache;
