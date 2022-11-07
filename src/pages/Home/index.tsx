import useSWR from "swr";
import { useState } from "react";
import { ContainerBackgroundMovies, MovieList, ContainerCards } from "./style";
import { fetcher } from "../../fetcherSWR";
import PaginationButtons from "../../components/PaginationButtons";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import "./style";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagePath = import.meta.env.VITE_IMG;

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(1);

  const { data } = useSWR(
    `${moviesURL}popular?${apiKey}&language=pt-br&page=${index}`,
    fetcher
  );

  if (!data)
    return (
      <>
        <ContainerBackgroundMovies
          backgroundimage={"/assets/background-movies.png"}
        >
          <h1>DevFlix</h1>
        </ContainerBackgroundMovies>

        <ContainerCards>
          <Loader />
        </ContainerCards>
      </>
    );

  const movies = data.results;

  return (
    <>
      <ContainerBackgroundMovies
        backgroundimage={"/assets/background-movies.png"}
      >
        <h1>DevFlix</h1>
      </ContainerBackgroundMovies>
      <ContainerCards id="top">
        <MovieList>
          {movies
            ? movies.map(
                (movie: { id: number; title: string; poster_path: string }) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      movieId={movie.id}
                      imagePath={imagePath}
                      posterPath={movie.poster_path}
                      alt={movie.title}
                      title={movie.title}
                    />
                  );
                }
              )
            : setIndex(index - 1)}
        </MovieList>
      </ContainerCards>

      <PaginationButtons
        buttonsPaginationVisible={true}
        ancorTop={"#top"}
        clickPrev={() => setIndex(index - 1)}
        prevVisible={index == 1 ? false : true}
        clickFirstValue={() => setIndex(index)}
        firstValue={index}
        clickSecondValue={() => setIndex(index + 1)}
        secondValue={index + 1}
        secondVisible={index == 500 ? false : true}
        clickThirdValue={() => setIndex(index + 2)}
        thirdValue={index + 2}
        thirdVisible={index >= 499 ? false : true}
        clickNext={() => setIndex(index + 1)}
        nextVisible={index >= 500 ? false : true}
      />
    </>
  );
};

export default Home;
