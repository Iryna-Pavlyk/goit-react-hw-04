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
        <button className={css.btn} onClick={onClose}>
          Close
        </button>
        <img className={css.img} src={url} alt={alt} />
      </ReactModal>
    </div>
  );
};
export default ImageModal;
