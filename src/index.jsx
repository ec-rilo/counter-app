import React from 'react';
import { createRoot } from 'react-dom/client';

// Assets
import './assets/reset.css';
import './assets/main.css';

// Components
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
