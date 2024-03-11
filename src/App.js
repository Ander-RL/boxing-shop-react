import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import RootPage from './pages/RootPage';
import PruebaPage from './pages/PruebaPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import ErrorPage from './pages/ErrorPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/account', element: <AccountPage /> },
      { path: '/prueba', element: <PruebaPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;;
}

export default App;
