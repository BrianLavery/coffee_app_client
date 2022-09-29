import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

createRoot(document.querySelector('#root')).render(<App />);
