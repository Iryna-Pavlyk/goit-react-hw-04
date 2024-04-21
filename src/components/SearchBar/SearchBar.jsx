import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { BiSolidZap } from "react-icons/bi";
import { Formik, Form, Field } from "formik";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.query.trim() === "") {
      toast("Please enter a request", {
        duration: 3000,
        icon: <BiSolidZap color="orange" size={22} />,
      });
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header className={css.searchBar}>
      <Toaster position="top-right" />
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
