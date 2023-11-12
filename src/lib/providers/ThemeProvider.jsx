"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeProvider = ({ children }) => {
  const [winObjMount, setWinObjMount] = useState(false);

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    setWinObjMount(true);
  }, []);

  if (winObjMount)
    return <div className={`${theme} containers  `}> {children}</div>;
};

export default ThemeProvider;
