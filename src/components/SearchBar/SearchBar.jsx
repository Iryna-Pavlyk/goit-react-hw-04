import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { BiSolidZap } from "react-icons/bi";
import { Formik, Form, Field } from "formik";

const SearchBar = ({ onSubmit, value }) => {
  const notify = () =>
    toast("Please enter a request", {
      duration: 3000,
      icon: <BiSolidZap color="orange" size={22} />,
    });
  return (
    <header className={css.searchBar}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          {value.trim() === "" && <Toaster />}
          <button className={css.btn} type="submit" onClick={notify}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
