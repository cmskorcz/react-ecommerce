import './App.css';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
