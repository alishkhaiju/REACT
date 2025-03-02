import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Movies from "./components/movies";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default App;
