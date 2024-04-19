import ReactModal from "react-modal";

const ImageModal = ({ modal, onOpen, onClose }) => {
  const customstyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(87, 81, 81, 0.80)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <button onClick={onOpen}>Open</button>
      <ReactModal
        isOpen={modal}
        contentLabel="Minimal Modal Example"
        style={customstyles}
        shouldCloseOnEsc={true}
      >
        <p>Hello</p>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    </div>
  );
};
export default ImageModal;
