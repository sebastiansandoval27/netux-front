import React, { useState } from "react";
import { AppContainer } from "./app.styled";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";

function App() {
  const [page, setpage] = useState(0);

  return (
    <Layout home={page === 0}>
      <AppContainer>{page === 0 && <Home />}</AppContainer>
    </Layout>
  );
}

export default App;
