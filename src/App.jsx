import "./App.css";
import MainScreen from "./components/MainScreen";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsScreen from "./components/DetailsScreen";
import { useState } from "react";

const App = () => {

  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/movie/:id" element={<DetailsScreen />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
};

export default App;
