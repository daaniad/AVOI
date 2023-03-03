import useFetch from "../../hooks/useFetch/useFetch";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import Swal from "sweetalert2"
export default function NoticeView() {
  const { authorization } = useCheckLoginContext();
  const { response, error } = useFetch(
    `http://localhost:3000/user/admin/${authorization.id}`
  );

  async function mail(e) {
    e.preventDefault();
    const user = await fetch(
      `http://localhost:3000/user/${authorization.id}/mail`
    );
    await user.json();
    return Swal.fire(
      'Correo enviado',
      '¡Gracias por avisar!',
      'success'
    );
  }

  return (
    <>
      <div className="mt-3 text-center justify-content-center">
        <h2>
          Avisa a tu responsable si no puedes acudir a tu turno. Recuerda
          nuestro lema: ¡Ningún niño sin jugar!
        </h2>
      </div>
      
        
            {response?.map((user) => (
              <>
              <div className="mb-5 mt-5 d-flex text-center justify-content-center" key={user.id}>
                  <h2 className="">
                    ¡Hola,{" "}
                    {authorization.nombre.replace(/^\w/, (c) =>
                      c.toUpperCase()
                    )}
                    ! Tu responsable es: {user.nombre.replace(/^\w/, (c) => c.toUpperCase())}{" "} {user.apellidos.replace(/^\w/, (c) => c.toUpperCase())}
                  </h2>
                  </div>
                  <div className="d-flex text-center justify-content-center">

                  <h2 className="">¡Avisa pulsando este botón!
                  </h2>
                  </div>
                  
                <div className="ms-3 mt-5 justify-content-center d-flex">
                  <button className="btn btn-success" onClick={(e) => mail(e)}>
                    Enviar correo
                  </button>
                </div>
              </>
              
            ))}

    </>
  );
}
