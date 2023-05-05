import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navbar'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product/:id' element={<SingleProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
