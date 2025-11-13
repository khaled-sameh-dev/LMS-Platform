import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => clearInterval(timer);
  }, [value, delay]);

  return debounceValue ;
}

export default useDebounce;
