import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import RootPage from './pages/RootPage';
import PruebaPage from './pages/PruebaPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/prueba', element: <PruebaPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;;
}

export default App;
