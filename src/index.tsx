import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';
import MyRoutes from './Router';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>
);
