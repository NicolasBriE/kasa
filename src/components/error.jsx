import { Link } from "react-router-dom";

import "./error.css";

function Error() {
  return (
    <div className="errorpage">
      <span className="title-error">404</span>
      <span className="texte-error">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="link-error">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
