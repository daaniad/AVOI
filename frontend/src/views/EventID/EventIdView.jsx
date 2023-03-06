import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import "./eventID.css"

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
  const {authorization} = useCheckLoginContext();
  
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
      <h1>Bienvenido al evento {event.titulo}</h1>

      {event && !toggle && (
        <>
          
          <div className="card card-event" style={{ width: "18rem" }} key={event.id}>
            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="card-img-top mw-100"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{event.titulo}</h5>
              <p className="card-text">{event.descripcion}</p>
              <p className="card-text">{event.fecha.split("T")[0]}</p>
            </div>
          {authorization.role === 2 &&
          <div className="d-flex justify-content-center">

            <button className="btn btn-success" onClick={handleToggleTrue}>Editar</button>
          </div>
          }
          </div>
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
              <form className="form-group" onSubmit={(e) => updateEvent(e)}>
                <input
                  className="form-control card-title"
                  name="titulo"
                  placeholder={event.title}
                  value={updatedEvent.titulo}
                  onChange={handleUpdate}
                ></input>

                <input className="card-text form-control mt-4" name="descripcion" onChange={handleUpdate} value={updatedEvent.descripcion}>
                </input>
                <input type="date" className="card-text form-control mt-4" name="fecha" onChange={handleUpdate} value={updatedEvent.fecha}>
                </input>
                <div className="d-flex justify-content-center mt-4">

                <button className="btn btn-success" type="submit">Guardar Cambios</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
