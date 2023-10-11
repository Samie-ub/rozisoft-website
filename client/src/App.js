import React, { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Loader from "./component/Loader";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Layout />}</div>;
}

export default App;
