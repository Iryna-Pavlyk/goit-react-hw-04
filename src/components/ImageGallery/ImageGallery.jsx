import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
