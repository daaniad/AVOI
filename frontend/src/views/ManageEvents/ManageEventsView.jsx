import { useState } from "react";
import "./manageEvents.css"
import Swal from "sweetalert2"
export default function ManageEventsView() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  function handleInput(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("titulo", title);
    formData.append("descripcion", description);
    formData.append("fecha", date);
    formData.append("imagen", file);

    fetch(`http://localhost:3000/event/upload`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire(
          `¡Evento introducido correctamente!`,
          "",
          'success');
          setTitle("")
          setDescription("")
          setDate("")
          setFile(null)
      }
    });
  }
  return (
    <>
    <div className="d-flex justify-content-center text-center">
      
      <h1>Introduce los detalles del evento aquí</h1>
    </div>
    <div className="container">
    <div className="d-flex justify-content-center">

      <form className="d-flex flex-column grid event-card gap-3 form-group m-3" method="post" encType="multipart/form-data" onSubmit={handleInput}>
        <input
          className="form-control rounded-pill text-center"
          type="text"
          name="titulo"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-control rounded-pill text-center"
          type="text"
          name="descripcion"
          required
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control rounded-pill text-center"
          type="date"
          name="fecha"
          placeholder=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="form-control rounded-pill text-center"
          type="file"
          name="imagen"
          value={undefined}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="btn rounded-pill btn-success" type="submit">Añadir evento</button>
      </form>
    </div>
    </div>
      
    </>
  );
}
