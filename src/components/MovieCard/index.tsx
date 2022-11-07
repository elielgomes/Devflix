import { Link } from "react-router-dom";
import { Movie } from "./style";

interface Props {
  movieId: number;
  posterPath: string;
  imagePath: string;
  alt: string;
  title: string;
}

const MovieCard: React.FC<Props> = (props) => {
  return (
    <Movie>
      <Link to={`/details/${props.movieId}`}>
        <img
          src={
            !props.posterPath
              ? "/assets/undefined-card.png"
              : `${props.imagePath}${props.posterPath}`
          }
          alt={props.alt}
        />
      </Link>
      <span>{props.title}</span>
    </Movie>
  );
};

export default MovieCard;
