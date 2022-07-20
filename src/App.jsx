import React, { useContext, useState } from "react";
import { AppContainer } from "./app.styled";
import Layout from "./components/Layout/Layout";
import Final from "./components/Pages/Final/Final";
import Form from "./components/Pages/Form/Form";
import Home from "./components/Pages/Home/Home";
import Map from "./components/Pages/Map/Map";
import { FormContext } from "./context/FormContext";

function App() {
  const [page, setPage] = useState(0);

  const backPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };

  return (
    <FormContext>
      <Layout home={page === 0} page={page} backButton={backPage}>
        <AppContainer>
          {page === 0 && <Home changePage={nextPage} />}
          {page === 1 && <Map changePage={nextPage} />}
          {page === 2 && <Form changePage={nextPage} />}
          {page === 3 && (
            <Final
              returnToHome={() => {
                setPage(0);
              }}
            />
          )}
        </AppContainer>
      </Layout>
    </FormContext>
  );
}

export default App;
