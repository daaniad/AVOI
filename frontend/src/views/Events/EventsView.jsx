import { Link } from "react-router-dom";
export default function EventsView({ events }) {
  return (
    <>
    <div className="d-flex mt-4 justify-content-center text-center">

      <h2>Estos son nuestros próximos eventos. ¡No te los pierdas!</h2>
    </div>

      
    <div className="row row-cols-1 m-2 row-cols-md-2 g-4" >
        {events?.map((event) => (
  <div className="col d-inline-flex" key={event.id}>
    <div className="card">
      <img src={`http://127.0.0.1:3000/${event.imagen}`} className="img-fluid w-100 card-img-top"
        alt="..." />
      <div className="card-body">
        <h3 className="card-title">{event.titulo}</h3>

        <Link to={`${event.id}`} className="btn btn-lg btn-success">
                Ver Detalles
              </Link>
      </div>
    </div>
  </div>
        ))}
        </div>
    </>
  );

}