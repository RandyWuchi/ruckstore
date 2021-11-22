import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components';
import { Home, Shop } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
