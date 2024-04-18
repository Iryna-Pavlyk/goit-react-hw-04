const ImageCard = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.name} />
    </div>
  );
};

export default ImageCard;
