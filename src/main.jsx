import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <SimpleForm />
  // </StrictMode>,
)
