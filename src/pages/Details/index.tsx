import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { FaStar } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import Loader from "../../components/Loader";
import { Container, ListGenres } from "./style";
import { fetcher } from "../../fetcherSWR";
import { SearchInputContext, ISearchInput } from "../../context/searchContext";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagePath = import.meta.env.VITE_IMG;

interface TypeData {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: [{ id: number; name: string }];
  tagline: string;
}

const Details: React.FC = () => {
  const { setSearchInput } = useContext(SearchInputContext) as ISearchInput;

  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useSWR(
    `${moviesURL}${id}?${apiKey}&language=pt-br`,
    fetcher
  );

  if (!data) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    runtime,
    genres,
    tagline,
  }: TypeData = data;

  let dateValue = release_date;
  let date = new Date(dateValue);
  let dateFormat = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  const movie = {
    id,
    title,
    overview,
    runtime,
    genres,
    tagline,
    image: `${imagePath}${poster_path}`,
    releaseDate: dateFormat,
    voteAverage: vote_average,
  };

  const goBack = () => {
    navigate(-1);
    setSearchInput("");
  };

  return (
    <>
      <Container>
        <div className="movie">
          <img
            className="poster-movie"
            src={!poster_path ? "/assets/undefined-card-lg.png" : movie.image}
            alt={movie.overview}
          />
          <div className="details">
            <h1>
              {movie.title == "Unknown" || !movie.title ? "" : `${movie.title}`}
            </h1>
            <h2>{movie.tagline}</h2>
            <span className="movie-info">
              <FaStar /> {movie.voteAverage}
            </span>
            <span className="movie-info">
              <BsHourglassSplit /> {movie.runtime} min
            </span>
            <ListGenres>
              {genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ListGenres>
            <span id="overview">
              {movie.overview
                ? `Sinopse:${movie.overview}`
                : `Desculpe não conseguimos encontrar informações sobre a sinopse deste filme.`}
            </span>
            <span className="release-date">
              Data de lançamento: {movie.releaseDate}
            </span>

            <button id="go-back" onClick={() => goBack()}>
              Voltar
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details;
