import React from "react";
import "../Hojas-de-estilo/details.css";

function Details({ isOpen, onClose, cardDetails, onDelete }) {
  /*si el modal no está abierto no se renderiza nada */
  if (!isOpen) return null;
  /*Manejamos el borrado de la card */
  const handleDelete = () => {
    onDelete(cardDetails.id); // elimina la card por id
    onClose(); // cierra el modal después de eliminarla
  };

  return (
    <div className="modal-details text-center">
      <div className="modal-content modal-sm">
        <span className="close" onClick={onClose}>
          &times; {/* El símbolo x para cerrar el modal */}
        </span>
        {/* Título con el nombre del perro */}
        <h2 className="title-name">{cardDetails.nombre}</h2>
        <div className="text-center">
          {/* Imagen del perro */}
          <img
            src={cardDetails.imageUrl}
            alt="perro"
            style={{ maxWidth: "75%", borderRadius: "8px" }} // Estilo directo para la imagen
          />
        </div>
        {/* Descripción del perro y lo que necesite de la card */}
        <div className="descripcion text-dark fs-5">
          <p className="mt-2"> {cardDetails.descripcion}</p>
          <p className="mt-2"> Ubicado en : {cardDetails.ubicacion}</p>
          <p className="mt-2"> contacto : +502 {cardDetails.contacto}</p>
          {/* Botón para eliminar la tarjeta */}
          <button onClick={handleDelete} className="btn custom-btn w-100">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
