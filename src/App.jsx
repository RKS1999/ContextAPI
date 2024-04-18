import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./Components/Pages/Home";
import AllProduct from "./Components/Pages/AllProducts";
import Cart from "./Components/Pages/Cart";




function App() {
  const router=createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>,
        },
        {
          path:"products",
          element:<AllProduct/>,
        },
        {
          path:"cart",
          element:<Cart/>
        },
        
      ],
    },
  ]);
  
  
  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
