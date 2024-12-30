import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';

type SearchBarProps = { onSubmit: () => void };
type FormValues = {
  query: string; // Об'єкт, що містить властивість 'query' типу string
};
type FormOptions = {
  resetForm: () => void; // Метод resetForm без аргументів
};

// 21)приймаємо onSubmit
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  // 15) створення початкового стану
  const initialValues = {
    query: '',
  };
  //16) створення функції сабміту
  const handleSubmit = (values: FormValues, options: FormOptions): void => {
    //17)очищення форми
    options.resetForm();
    // console.log(values);
    // 22) викликаємо функцію при сабміті
    onSubmit(values.query);
  };
  // e.preventDefault();
  // const form = e.target;
  // const topic = form.elements.topic.value;

  // Якщо текстове поле порожнє, виводимо повідомлення
  // і припиняємо виконання функції.
  //   if (form.elements.topic.value.trim() === ' ') {
  //     alert('Please enter search term!');
  //     return;
  //   }

  //   onSubmit(topic);
  //   form.reset();
  // };
  return (
    <header className={s.block}>
      {/*14) створюємо форму через Формік */}
      {/*18) initialValues onSubmit навішуємо на Формік */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {/*19) добавляємо кнопку */}
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
