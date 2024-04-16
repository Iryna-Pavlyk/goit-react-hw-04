import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../gallery-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

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
  }, []);

  return (
    <div className={css.container}>
      <h1>Hello</h1>
      <SearchBar onSubmit={{}} />
      <Loader />
      {error && <b>Error!</b>}
      <ImageGallery />
    </div>
  );
};

export default App;
