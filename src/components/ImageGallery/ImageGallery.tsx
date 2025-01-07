import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

type Image = {
  id: string; // Унікальний ідентифікатор зображення
  urls: { small: string; regular: string }; // URL маленького і великого зображення
  alt_description?: string; // Альтернативний опис зображення
  user: { name: string; location?: string };
};

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  //console.log(images);
  // фільтрація для видалення дубльованих записів. консоль видавала помилку і АРІ повертаєдубльований масив(через консольлог видно)
  const uniqueImages = images.filter(
    (image, index, self) => index === self.findIndex(t => t.id === image.id)
  );
  return (
    <div>
      <ul className={s.gallery}>
        {/* 4) розмепуємо обєкт */}
        {uniqueImages.map(post => (
          <li key={post.id}>
            {/* Використовується унікальний ключ */}
            <ImageCard
              post={post.urls.small}
              alt={post.alt_description}
              onClick={() =>
                onImageClick(post)
              } /* 40)встановлення функції на клік */
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
