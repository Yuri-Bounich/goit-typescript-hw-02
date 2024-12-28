import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Toaster position="top-left" reverseOrder={true} />
    </>
  </StrictMode>
);
