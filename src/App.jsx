import React from "react";
import { useState } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [page, setpage] = useState(0);

  return (
    <Layout home={page === 0}>
      <div className="App">
        <h2 className="test">Solicita tu turno virtual</h2>
      </div>
    </Layout>
  );
}

export default App;
