import useSWR from "swr";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ContainerCards, MovieList, ContainerTitle } from "./style";
import { FaSearch } from "react-icons/fa";
import { fetcher } from "../../fetcherSWR";
import PaginationButtons from "../../components/PaginationButtons";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import ButtonHome from "../../components/ButtonHome";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const imagePath = import.meta.env.VITE_IMG;

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [index, setIndex] = useState<number>(1);

  const { data } = useSWR(
    query
      ? `${searchURL}?${apiKey}&query=${query}&language=pt-br&page=${index}`
      : null,
    fetcher
  );

  if (!data) {
    return (
      <ContainerCards>
        <Loader />
      </ContainerCards>
    );
  }

  return (
    <>
      <ContainerTitle>
        <h1>
          <FaSearch />
          {data.results.length == 0
            ? `Nenhum resultado para: ${query}`
            : `Resultados para: ${query}`}
        </h1>
      </ContainerTitle>

      <ContainerCards id="top">
        <MovieList>
          {data.results &&
            data.results.map(
              (movie: { id: number; poster_path: string; title: string }) => {
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
            )}
        </MovieList>
      </ContainerCards>

      <PaginationButtons
        buttonsPaginationVisible={data.results.length > 0 ? true : false}
        ancorTop={"#top"}
        clickPrev={() => setIndex(index - 1)}
        prevVisible={index == 1 ? false : true}
        clickFirstValue={() => setIndex(index)}
        firstValue={index}
        clickSecondValue={() => setIndex(index + 1)}
        secondValue={index + 1}
        secondVisible={index == data.total_pages ? false : true}
        clickThirdValue={() => setIndex(index + 2)}
        thirdValue={index + 2}
        thirdVisible={index >= data.total_pages - 1 ? false : true}
        clickNext={() => setIndex(index + 1)}
        nextVisible={index >= data.total_pages ? false : true}
      />
      <ButtonHome />
    </>
  );
};

export default Search;
