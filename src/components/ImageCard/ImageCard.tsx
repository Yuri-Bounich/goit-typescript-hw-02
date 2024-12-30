import s from './ImageCard.module.css';

type ImageCardProps = {
  post: string;
  alt: string | undefined;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ post, alt, onClick }) => {
  return <img className={s.image} src={post} alt={alt} onClick={onClick} />;
};

export default ImageCard;
