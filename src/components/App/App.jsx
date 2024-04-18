import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../gallery-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPhotos(query, page);

        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  return (
    <div className={css.container}>
      <h1>Hello</h1>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <b>Error!</b>}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};

export default App;
