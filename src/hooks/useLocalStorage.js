import { useState, useEffect } from "react";

export default (key, initalValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initalValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
