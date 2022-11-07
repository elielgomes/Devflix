import { createContext, useState, ReactNode } from "react";

export interface ISearchInput {
  searchInput: string;
  setSearchInput: Function;
}

export const SearchInputContext = createContext<ISearchInput | {}>({});

const SearchInputProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  );
};

export default SearchInputProvider;
