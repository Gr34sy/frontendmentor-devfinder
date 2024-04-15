import "./App.css";
import { Box } from "./components/Box";
import { Layout } from "./components/Layout";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  function toggleMode() {
    setDarkmode((prevMode) => !prevMode);
  }

  return (
    <div className={darkmode ? "App dark" : "App"}>
      <Layout>
        <Header onClick={toggleMode} darkmode={darkmode}/>
        <SearchBar />
        <Box />
      </Layout>
    </div>
  );
}

export default App;
