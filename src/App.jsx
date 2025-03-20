import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import NavBar from './components/nav-bar.jsx';
import PageNotFound from './components/page-not-found.jsx';
import Counter from './components/counter.jsx';



const App = () => {
  

    return (
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/counter" element={<Counter/>}></Route>
            </Route>

            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
};

export default App