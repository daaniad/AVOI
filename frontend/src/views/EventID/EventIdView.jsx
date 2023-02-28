import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EventIdView() {
  const [toggle, setToggle] = useState(false);
  const [changeEvent, setChangeEvent] = useState(false);
  const { id } = useParams(); //Lo llamamos id porque en App.jsx el path lo llamamos ":id"
  const [event, setEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
  });

  function handleToggleTrue(e) {
    e.preventDefault();
    setToggle(true);
  }

  function handleUpdate(e) {
    e.preventDefault();
    const newEvent = {
      ...updatedEvent,
      [e.target.name]: e.target.value,
    };
    setUpdatedEvent(newEvent);
  }

  useEffect(function () {
    async function fetchEvent() {
      const response = await fetch(`http://localhost:3000/event/${id}`);
      const data = await response.json();
      setEvent(data);
    }
    fetchEvent();
  }, [changeEvent]);

  async function updateEvent(e) {
    e.preventDefault();
    const event = await fetch(`http://localhost:3000/event/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });
    if (event.status === 200) {
      setToggle(!toggle);
      setChangeEvent(!changeEvent)
    } else {
      alert("error");
      console.log(event.status);
    }
  }

  return (
    <>
      <h1>Esto es Evento Detalle</h1>

      {event && !toggle && (
        <>
          <div className="card" style={{ width: "18rem" }} key={event.id}>
            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{event.titulo}</h5>
              <p className="card-text">{event.descripcion}</p>
              <p className="card-text">{event.fecha.split("T")[0]}</p>
            </div>
          </div>
          <button onClick={handleToggleTrue}>Editar</button>
        </>
      )}

      {event && toggle && (
        <>
          <div className="card" style={{ width: "18rem" }} key={event.id}>
            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <form onSubmit={(e) => updateEvent(e)}>
                <input
                  className="text-white card-title"
                  name="titulo"
                  placeholder={event.title}
                  value={updatedEvent.titulo}
                  onChange={handleUpdate}
                ></input>

                <input className="card-text" name="descripcion" onChange={handleUpdate} value={updatedEvent.descripcion}>
                </input>
                <input type="date" className="card-text" name="fecha" onChange={handleUpdate} value={updatedEvent.fecha}>
                </input>
                <button type="submit">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
