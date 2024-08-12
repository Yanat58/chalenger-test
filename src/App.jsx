
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SharedLayout from './components/SharedLayout';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
      
   
  );
}
