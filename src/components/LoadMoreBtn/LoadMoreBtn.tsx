import s from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = { handleLoad: () => void };

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoad }) => {
  return (
    <div className={s.block}>
      {/* 26) створюємо кнопку лоад мор*/}
      <button className={s.btn} onClick={handleLoad}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
