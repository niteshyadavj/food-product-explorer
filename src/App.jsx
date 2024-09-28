import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
import ProductDetail from './components/ProductDetail';
import HomePage from './components/Homepage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
