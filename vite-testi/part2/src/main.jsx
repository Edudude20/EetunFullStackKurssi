// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

// const promise = axios.get("http://localhost:3001/notes").then((response) => {
//   const notes = response.data;
//   console.log(notes);
// });
// console.log(promise);

// promise.then(response => {
//   console.log(response);
// })

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
