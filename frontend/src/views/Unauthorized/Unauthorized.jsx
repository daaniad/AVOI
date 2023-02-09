import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
  <>
    <h2 className="text-white">
      Your current account has not permission to access this site
    </h2>
    <button onClick={goBack} className="btn m-2 btn-light">
      Go Back
    </button>
  </>
  );
}
