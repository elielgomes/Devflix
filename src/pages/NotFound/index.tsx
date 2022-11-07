import { ContainerNotFound } from "./style";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <>
      <ContainerNotFound>
        <h1>
          <span className="colored-text">Ooops!</span>
          <br /> Página não encontrada
        </h1>
        <img className="image-404" src="/assets/404.png" alt="404" />

        <div className="container-banner">
          <p>
            PEGUE SUA PIPOCA E ASSISTA OS{" "}
            <span className="colored-text">MELHORES</span> FILMES
          </p>
          <Link to={"/"}>
            <button>Assistir</button>
          </Link>
        </div>
      </ContainerNotFound>
    </>
  );
};

export default PageNotFound;
