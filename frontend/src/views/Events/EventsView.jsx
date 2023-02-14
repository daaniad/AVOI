import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../../const/events/events"

// Importa los estilos CSS
import "react-big-calendar/lib/css/react-big-calendar.css";
export default function EventsView({}) {
  const localizer = momentLocalizer(moment);
  
  return (
    <>
      <h1>Esto es Events</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
      


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
