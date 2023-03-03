import { Link } from "react-router-dom";
export default function EventsView({ events }) {
  return (
    <>
    <div className="d-flex mt-4 justify-content-center text-center">

      <h2>Estos son nuestros próximos eventos. ¡No te los pierdas!</h2>
    </div>

      
        {events?.map((event) => (
    <div className="row row-cols-1 m-2 row-cols-md-2 g-4" key={event.id}>
  <div className="col d-inline-flex">
    <div className="card">
      <img src={`http://127.0.0.1:3000/${event.imagen}`} className="img-fluid w-100 card-img-top"
        alt="..." />
      <div className="card-body">
        <h5 className="card-title">{event.titulo}</h5>
        <p className="card-text">
        {event.descripcion}
        </p>
        <p className="card-text">{event.fecha.split("T")[0]}</p>
        <Link to={`${event.id}`} className="btn btn-success">
                Ver Detalles
              </Link>
      </div>
    </div>
  </div>
</div>
        ))}
    </>
  );

}