import s from './ImageModal.module.css';
import ReactModal from 'react-modal';

type ImageModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  post: string; // URL зображення
  alt: string;
  user: string;
  location: string; // Місце, звідки зображення
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  post,
  alt,
  user,
  location,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)', // Затемнення фону
        },
      }}
      contentLabel="Image Preview"
    >
      <div className={s.modal}>
        <h2>
          Photo by {user} from {location}
        </h2>
        <img src={post} alt={alt} />
        <button onClick={closeModal}>Close</button>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
