import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormCHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { HooksApp } from './HooksApp';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <MultipleCustomHooks />
  // </StrictMode>,
)
