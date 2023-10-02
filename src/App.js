import './App.css';
import Home from './Routes/Home';
import Video from './Routes/Video'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './Routes/Signin';
import Ready from './Routes/Ready';
import Align from './Routes/Align';
import HomePage from './Routes/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/home",
      element:<HomePage />
    },{
        path:"/signin",
        element: <Signin />
    }
    ,{
      path:"/videos/:_id",
      element:<Video />
    },{
      path:'/ready',
      element:<Ready />
    },{
      path: '/ho',
      element: <HomePage />
    }
  ])
  return (

     <RouterProvider router={router}></RouterProvider>

  );
}


export default App;
