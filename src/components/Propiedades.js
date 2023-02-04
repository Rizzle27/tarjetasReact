import React from "react";
import Producto from "./Producto";

export function Propiedades1() {
  return (
    <Producto
      imagen="nissan"
      alt="Foto Nissan"
      marca="Nissan"
      modelo="GTR"
      pais="Japón"
      vehiculo="Auto"
      tipo="deportivo"
      descripcion="Nissan GT-R es uno de los autos deportivos más rápidos y potentes del mundo. Con una velocidad máxima de 318 km/h, el automóvil puede recorrer 100 km en solo 3,6 segundos. Eso es lo suficientemente rápido como para superar la barrera del sonido y generar un estampido sónico al pasar."
    />
  );
}

export function Propiedades2() {
  return (
    <Producto
      imagen="mustang"
      alt="Foto Mustang"
      marca="Ford"
      modelo="Mustang"
      pais="Tierra del Fuego"
      vehiculo="Auto"
      tipo="deportivo"
      descripcion="No sorprende que el Mustang sea uno de los muscle cars más famosos de la historia. No solo es el pony car original, sino que también es conocido como el vehículo que puso a Ford en el mapa automotriz."
    />
  );
}

export function Propiedades3() {
  return (
    <Producto
      imagen="supra"
      alt="Foto Supra"
      marca="Toyota"
      modelo="Supra"
      pais="Japón"
      vehiculo="Auto"
      tipo="deportivo"
      descripcion="El Toyota Supra es un automóvil deportivo de ultra lujo fabricado por Toyota. Basado en el Toyota Celica, el Supra se introdujo en 1978 como reemplazo del Celica. Tiene una potencia de 3 dígitos y transmisión manual de 6 velocidades."
    />
  );
}
