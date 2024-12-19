import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movieDetail/MovieDetails';
import Header from './components/header/Header';



function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:id' element={<MovieDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
