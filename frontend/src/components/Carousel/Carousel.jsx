import "./carousel.css";
export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
              <p className="centrado text-encima">Oncofutbol</p>
            <img
              src="/oncofutbol.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <p className="centrado text-encima">Feria AVOI</p>
            <img
              src="/avoiFeria.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <p className="centrado text-encima">El Camino</p>
            <img
              src="/avoiCamino.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-success"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-success"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
