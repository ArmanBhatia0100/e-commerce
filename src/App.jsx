import {} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { use } from "react";
import { ProductContext } from "./context/ProductContext";
import useFetchItem from "./hooks/useFetchItem";

function App() {
  return <Homepage></Homepage>;
}

export default App;
