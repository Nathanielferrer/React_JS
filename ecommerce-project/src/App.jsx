import { CheckoutPage } from './Pages/checkout';
import { HomePage } from './Pages/HomePage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
    <Routes>
      {/* Define your routes here */}
      <Route index element={<HomePage />} /> 
      <Route path="checkout" element={< CheckoutPage />} />
    </Routes>
    </>
  );
}

export default App
