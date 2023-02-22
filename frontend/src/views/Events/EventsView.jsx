import { Link } from "react-router-dom";
export default function EventsView({ events }) {
  return (
    <>
      <h1>Esto es Events</h1>

      {/* Futura tarjeta de evento para ir a evento detalle */}
      <div className="d-flex">
        {events?.map((event) => (
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
              <Link to={`${event.id}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
