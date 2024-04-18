const ImageCard = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.slug} />
    </div>
  );
};

export default ImageCard;
