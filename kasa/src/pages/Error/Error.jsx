import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error;
