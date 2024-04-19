import { MdError } from "react-icons/md";
import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.text}>
      <MdError className={css.icon} size={20} color={"red"} />
      <b>Error! Please try again!</b>
    </p>
  );
};
export default ErrorMessage;
