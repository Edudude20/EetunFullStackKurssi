// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import App from "./App";

/*Päätin pitää tämän, koska uskon, että StrictModesta voisi olla hyötyä. 
EDIT: se renderöi 
hassusti neljä kertaa? Ilman Strict modea se näyttää oikealta konsolissa, mutta sen vieressä lukee 2?
*/

/*
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
