import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import Swal from "sweetalert2";
import "./eventID.css";

export default function EventIdView() {
  const [toggle, setToggle] = useState(false);
  const [event, setEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
  });
  const { authorization } = useCheckLoginContext();
  const { id } = useParams(); //Lo llamamos id porque en App.jsx el path lo llamamos ":id"

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

  useEffect(
    function () {
      async function fetchEvent() {
        const response = await fetch(`http://localhost:3000/event/${id}`);
        const data = await response.json();
        setEvent(data);
      }
      fetchEvent();
    },
    []
  );

  async function updateEvent(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/event/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });
    if (response.status === 200) {
      setToggle(!toggle);
      const event = await response.json();
      setEvent(event)
      Swal.fire("¡Evento modificado correctamente!", "", "success");
    } else {
      Swal.fire("Error al modificar el evento", "Prueba de nuevo", "error");
    }
  }

  return (
    <>
      <div className="text-center">
        <h1>Bienvenido al evento {event?.titulo}</h1>
      </div>

      {event && !toggle && (
        <>
          <div
            className=" container mt-5 flex-column "
            
            key={event.id}
          >
            <div className="d-flex justify-content-center">

            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="img-fluid event-image"
              alt="..."
            />
            </div>
              
          </div>

          <div className="d-flex justify-content-center">
        <section className="container-sm row justify-content-center">
        <div className="col-12 col-md-4 event-card mt-4 text-center">
          <h2 className="mb-3">{event.titulo}</h2>
          <span className="">
            {event.descripcion}
          </span>
          <h4 className="mt-3">
            {event.fecha}
          </h4>
            {authorization.role === 2 && (
              <div className="d-flex justify-content-center">
              <button className="btn btn-success" onClick={handleToggleTrue}>
              Editar
              </button>
              </div>
              )}
        </div>


        </section>
      </div>
        </>
      )}

      {event && toggle && (
        <>
            <div
            className=" container mt-5 flex-column "
            
            key={event.id}
          >
            <div className="d-flex justify-content-center">

            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="img-fluid event-image"
              alt="..."
            />
            </div>
              
          </div>
            <div className="d-flex justify-content-center mt-4">
              <form className="form-group event-card" onSubmit={(e) => updateEvent(e)}>
                <input
                  className="form-control card-title"
                  name="titulo"
                  placeholder={event.title}
                  value={updatedEvent.titulo}
                  onChange={handleUpdate}
                ></input>

                <input
                  className="card-text form-control mt-4"
                  name="descripcion"
                  onChange={handleUpdate}
                  value={updatedEvent.descripcion}
                ></input>
                <input
                  type="date"
                  className="card-text text-center form-control mt-4"
                  name="fecha"
                  onChange={handleUpdate}
                  value={updatedEvent.fecha}
                ></input>
                <div className="d-flex justify-content-center mt-4">
                  <button className="btn btn-success" type="submit">
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
        </>
      )}
    </>
  );
}
