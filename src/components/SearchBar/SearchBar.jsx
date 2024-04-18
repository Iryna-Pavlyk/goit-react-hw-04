// import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";

const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        ></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
export default SearchBar;
