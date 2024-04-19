import { FcLikePlaceholder } from "react-icons/fc";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import css from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        width={360}
      />
      <div className={css.descr}>
        <p>
          <MdOutlineDescription color="lightgray" className={css.icon} />
          <b>Description: </b>
          {item.alt_description}
        </p>
        <p>
          <FcLikePlaceholder className={css.icon} />
          <b>Likes: </b>
          {item.likes}
        </p>
        {item.user.name !== null && (
          <p className={css.text}>
            <AiOutlineUser color="green" className={css.icon} />
            <b>Author: </b>
            {item.user.name}
          </p>
        )}
        {item.user.location !== null && (
          <p className={css.text}>
            <SlLocationPin color="lightblue" className={css.icon} />
            <b>Location: </b>
            {item.user.location}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
