import { Routes, Route } from 'react-router-dom';
import './App.css';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path='/card/:cardId' element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
