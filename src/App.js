import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components';
import { Auth, Home, Shop } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
