import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavbarBody } from "./style";
import useDebounce from "../../useDebounce";
import { SearchInputContext, ISearchInput } from "../../context/searchContext";

const Navbar: React.FC = () => {
  const { searchInput, setSearchInput } = useContext(
    SearchInputContext
  ) as ISearchInput;
  const debouncedValue: string = useDebounce(searchInput, 2000);

  const navigate = useNavigate();

  useEffect(() => {
    if (!debouncedValue || !debouncedValue.trim()) return;

    navigate(`/search?q=${debouncedValue}`);
  }, [debouncedValue]);

  return (
    <>
      <NavbarBody>
        <nav id="navbar">
          <Link to={"/"} id="container-brand">
            <img src="/assets/DEVFLIX-brand-sm.png" alt="DEVFLIX-BRAND" />
          </Link>
          <input
            type="search"
            placeholder={"Busque seus filmes favoritos"}
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(e.target.value)
            }
          />
        </nav>
      </NavbarBody>
    </>
  );
};

export default Navbar;
