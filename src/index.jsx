import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Forms from './form/Form';

let routers = createBrowserRouter([

  {path:'/', element:<Layout/> , children:[
    {path:'/' , element:<Hero/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'about' , element:<About/>},
    {path:'contact' , element:<Forms/>},
    
  ]}

]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers}>
    <App />
    </RouterProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

