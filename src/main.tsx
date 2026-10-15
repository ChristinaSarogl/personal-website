import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import AppRoutes from './routes/AppRoutes';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter >
    <AppRoutes />
  </HashRouter >
)
