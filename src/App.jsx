import React, { useState } from "react";
import { AppContainer } from "./app.styled";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Map from "./components/Pages/Map/Map";

function App() {
  const [page, setpage] = useState(1);

  return (
    <Layout home={page === 0}>
      <AppContainer>
        {page === 0 && <Home />}
        {page === 1 && <Map />}
      </AppContainer>
    </Layout>
  );
}

export default App;
