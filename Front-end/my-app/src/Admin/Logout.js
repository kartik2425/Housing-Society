import React from "react";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return;
};

export default Logout;
