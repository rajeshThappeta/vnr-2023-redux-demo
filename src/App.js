import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Sample1 from "./components/Sample1";
import Sample2 from "./components/Sample2";
import RootLayout from "./RootLayout";
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children:[
        {
          path:'sample1',
          element:<Sample1 />,
          children:[
            {
              path:'test1',
              element:<Test1 />
            },
            {
              path:"test2",
              element:<Test2 />
            }
          ]

        },
        {
          path:'sample2',
          element:<Sample2 />,
          children:[
            {
              path:'test3',
              element:<Test3 />
            },
            {
              path:"test4",
              element:<Test4 />
            }
          ]
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
