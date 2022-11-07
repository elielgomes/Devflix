import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ContainerButtonHome } from "./style";
import { SearchInputContext, ISearchInput } from "../../context/searchContext";

const ButtonHome: React.FC = () => {
  const { setSearchInput } = useContext(SearchInputContext) as ISearchInput;

  return (
    <>
      <ContainerButtonHome>
        <Link to={"/"}>
          <button onClick={() => setSearchInput("")}>
            <FaHome />
          </button>
        </Link>
      </ContainerButtonHome>
    </>
  );
};

export default ButtonHome;
