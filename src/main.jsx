// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider,Route,Link,BrowserRouter,} from "react-router-dom";
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormCHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayout/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <BrowserRouter> 
  
  <MainApp />
  
  
  </BrowserRouter>
   
  // </StrictMode>,
)
