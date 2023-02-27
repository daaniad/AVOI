import { useState } from "react"

export default function EventIdView({event,updatedEvent, setUpdateEvent}) {

  const [toggle, setToggle] = useState(false);

  function handleToggleTrue(e) {
    e.preventDefault();
    setToggle(true)
  }

  function handleUpdate(e) {
    e.preventDefault();
    const newEvent = {
      [e.target.name]:e.target.value

    }
    setUpdateEvent(newEvent)
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
        ) }
        
        {event && toggle &&(

          <>
          <div className="card" style={{ width: "18rem" }} key={event.id}>
            <img
              src={`http://127.0.0.1:3000/${event.imagen}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <input className="text-white card-title" name="titulo" placeholder={event.title} onChange={handleUpdate}></input>
              <p className="card-text">{event.descripcion}</p>
              <p className="card-text">{event.fecha.split("T")[0]}</p>
            </div>
          </div>
          <button onClick={handleUpdate}>Guardar Cambios</button>
          </>
        )}



        </>
    )
}