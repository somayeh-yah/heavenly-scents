import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Products from "../Pages/Products";
import Order from '../Pages/Order';
import ProductDetail from '../Pages/ProductDetail';
import Checkout from "../Pages/Checkout";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {path: "/login", element: <LoginForm/>},
    {path: "/register", element: <RegisterForm/>},
    {path: "/products", element: <Products/>},
    {path: "/order", element: <Order/>},
    {path: "/products/:title", element: <ProductDetail/>},
    {path: "/checkout", element: <Checkout/>},
    
]);

export default router;
