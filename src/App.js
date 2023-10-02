import './App.css';
import Home from './Routes/Home';
import Video from './Routes/Video'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './Routes/Signin';
import Ready from './Routes/Ready';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/home",
      element:<Home />
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
    }
  ])
  return (

     <RouterProvider router={router}></RouterProvider>

  );
}


export default App;
