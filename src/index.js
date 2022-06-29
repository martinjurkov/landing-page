import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import './components/Header.css';
import './components/NewProducts.css';
import './components/Contact.css';
import './components/Footer.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
