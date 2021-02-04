import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import { DndProvider } from 'react-dnd';

// @ts-ignore
const HTML5toTouch = {
    backends: [
        {
            backend: HTML5Backend
        },
        {
            backend: TouchBackend, // Note that you can call your backends with options
            preview: true,
            transition: TouchTransition
        }
    ]
};
// @ts-ignore
// @ts-ignore
ReactDOM.render(
  <React.StrictMode>
      {// @ts-ignore
          true&&<DndProvider backend={HTML5toTouch} options={HTML5toTouch}>
          <App />
      </DndProvider>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
