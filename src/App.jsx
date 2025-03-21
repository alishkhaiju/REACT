import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import NavBar from './components/nav-bar.jsx';
import PageNotFound from './components/page-not-found.jsx';
import Counter from './components/counter.jsx';
import Components1 from './components/component-1.jsx';
import Component from './components/component-useustate.jsx'


const App = () => {
  

    return (
      <><Component></Component></>
        //  <Routes>
        //      <Route path='/' element={<NavBar/>}>
        //          <Route path="/" element={<Home />} />
        //          <Route path="/movies" element={<Movies />} />
        //          <Route path="/counter" element={<Counter/>}></Route>
        //      </Route>

        //      <Route path="*" element={<PageNotFound/>} />
        //  </Routes>
    );
};

export default App