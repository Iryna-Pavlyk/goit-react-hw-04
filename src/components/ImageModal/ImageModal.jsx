import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modal, onClose, url, alt }) => {
  return (
    <div>
      <ReactModal
        isOpen={modal}
        contentLabel="Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.img} src={url} alt={alt} width={1080} />
      </ReactModal>
    </div>
  );
};
export default ImageModal;
