// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("root"));
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.querySelector("#root"); // Make sure to use '#' for id
const root = createRoot(container);
root.render(<App />);
