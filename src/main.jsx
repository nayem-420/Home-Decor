import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import MainLayouts from './Layouts/MainLayouts/MainLayouts.jsx';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <MainLayouts/> 
  </RouterProvider>,
)
