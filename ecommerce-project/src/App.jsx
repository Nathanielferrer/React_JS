import {HomePage} from './Pages/HomePage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
    <Routes>
      {/* Define your routes here */}
      <Route index element={<HomePage />} /> 
      <Route path="checkout" element={} />
    </Routes>
    </>
  );
}

export default App
