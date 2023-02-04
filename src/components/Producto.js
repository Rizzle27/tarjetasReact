import React from "react";
import "../stylesheets/Producto.css";

function Producto(props) {
  return (
    <div className="contenedorProducto">
      <img
        className="imagenProducto"
        src={require(`../images/producto-${props.imagen}.png`)}
        alt={props.alt}
      />
      <div className="contenedorTextoProducto">
        <p className="nombrePaisProducto">
          <strong>
            {props.marca} {props.modelo}
          </strong>{" "}
          de {props.pais}
        </p>
        <p className="tipoPorducto">
          {props.vehiculo} {props.tipo}
        </p>
        <p className="textoProducto">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Producto;
