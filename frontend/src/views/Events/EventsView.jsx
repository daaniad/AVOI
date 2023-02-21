import { useState } from "react";
export default function EventsView() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");

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
        alert("Event added successfully");
      }
    });
  }
  console.log(title);
  return (
    <>
      <h1>Esto es Events</h1>
      <form method="post" encType="multipart/form-data" onSubmit={handleInput}>
        <input
          type="text"
          name="titulo"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="descripcion"
          required
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          name="fecha"
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="file"
          name="imagen"
          value={undefined}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Add Event</button>
      </form>

      {/* Futura tarjeta de evento para ir a evento detalle */}
      {/* <div className="d-flex">
        {response?.map((product, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img
              src={`http://127.0.0.1:3000/${product.path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.descripcion}</p>
              <Link to={`${product.idproducto}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
