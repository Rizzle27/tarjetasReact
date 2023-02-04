import "./App.css";
// import Producto from "./components/Producto";
import {Propiedades1, Propiedades2, Propiedades3} from "./components/Propiedades";

function App() {
  return (
    <div className="App">
      <div className="contenedorPrincipal">
        <h1>Los coches más zarpados anashex</h1>
        <Propiedades1/>
        <Propiedades2/>
        <Propiedades3/>
      </div>
    </div>
  );
}

export default App;
