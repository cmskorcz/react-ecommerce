import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navbar'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';

function App() {
  const productsArr = [
    {
      id: 1,
      name: 'Apple',
      type: 'fruit',
      qty: 10,
      price: '0.89'
    },
    {
      id: 2,
      name: 'Cherry',
      type: 'fruit',
      qty: 20,
      price: '1.00'
    },
    {
      id: 3,
      name: 'Carrot',
      type: 'vegetable',
      qty: 30,
      price: '0.50'
    },
    {
      id: 4,
      name: 'Squash',
      type: 'vegetable',
      qty: 5,
      price: '1.20'
    }
  ];

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage productsArr={productsArr} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product/:id' element={<SingleProductPage productsArr={productsArr} />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
