import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const style = {
    transform: "rotate(180deg)",
    transition: "transform 150ms ease", // smooth transition
  };
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
  <>
    <h2 className="text-center">
      Tu cuenta no tiene permisos para acceder a esta ruta. Pulsa el botón para volver.
    </h2>
    <div className="d-flex justify-content-center m-4 align-items-center">
            <i
              style={style}
              className="bi fs-1 bi-hand-index-thumb text-success"
            ></i>
          </div>
    <div className="d-flex justify-content-center">

    <button onClick={goBack} className="btn m-2 btn-lg btn-success">
      Volver
    </button>
    </div>
  </>
  );
}
