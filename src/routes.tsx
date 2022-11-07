import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/NotFound";
import "./global.css";
import SearchInputProvider from "./context/searchContext";

const App = () => {
  return (
    <BrowserRouter>
      <SearchInputProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SearchInputProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
