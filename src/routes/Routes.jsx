import {
    createBrowserRouter} from "react-router-dom";
  
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
 import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../components/NotFound";
import About from "../pages/About";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=>fetch('../categoryData.json'),
          children:[
            {
              path: '/',
              element: <ProductCards></ProductCards>,
              loader: ()=>fetch('../mainData.json'),
            },
            {
              path: '/category/:category',
              element: <ProductCards></ProductCards>,
              loader: ()=>fetch('../mainData.json'),
            },
            {
              path: '/category',
              element: <ProductCards></ProductCards>,
              loader: ()=>fetch('../mainData.json'),
            },
          ],
        },
        {
           path: '/statistics',
           element: <Statistics></Statistics>,
           loader: ()=>fetch('../mainData.json'),
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
          loader: ()=>fetch('../mainData.json'),
        },
        {
          path: '/details/:details',
          element: <ProductDetails></ProductDetails>,
          loader: ()=>fetch('../mainData.json'),
        },
        {
          path: '/about',
          element: <About></About>
          
        },
      ]
    },
  ]);

  export default router