import { useState, useEffect } from "react";
import { fetchPhotos } from "../../gallery-api";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState({ showModal: false });

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = () => {
    setShowModal({ showModal: true });
  };
  const handleCloseModal = () => {
    setShowModal({ showModal: false });
  };

  useEffect(() => {
    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
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
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} value={query} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}

        {images.length > 0 && <ImageGallery items={images} />}
        {images.length > 0 && !isLoading && (
          <LoadMoreBtn onClik={handleLoadMore} />
        )}
        {images.length > 0 && (
          <ImageModal
            modal={showModal}
            onOpen={handleOpenModal}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
