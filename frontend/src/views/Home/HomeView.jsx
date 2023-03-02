import Carousel from "../../components/Carousel";
import "./home.css"

export default function HomeView() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <section className="container-sm row justify-content-center">
        <div className="col-12 col-md-4 me-5">
          <h2 className="mb-5">¿Qué hacemos?</h2>
          <span className="">
            Nuestro objetivo en AVOI es que nunca quede ningún niño y niña sin
            jugar y sin sonreír. Desde 1993, AVOI (Asociación de Voluntarios de
            Oncología Infantil) se dedica a ayudar a niños y niñas del Hospital
            Materno-Infantil haciendo que su estancia sea lo más agradable
            posible.
          </span>
        </div>
        <div className="col-12 col-md-4 ms-5">
          <img src="./avoiPlanta.png" className="img-fluid w-100"></img>
        </div>

        </section>
      </div>
      <p className="text-center fs-2 mt-5">
        ¡Echa un vistazo a las fotos de nuestros últimos eventos!
      </p>
      <div className="m-4">
        <Carousel className="" />
      </div>
    </>
  );
}
