export default function EventIdView({event}) {
    return (
        <>
        <h1>Esto es Evento Detalle</h1>

        {event && (
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
        )
        }
        </>
    )
}