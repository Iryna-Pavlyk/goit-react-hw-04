import { MdError } from "react-icons/md";

const ErrorMessage = () => {
  return (
    <b>
      <MdError size={20} color={"red"} />
      Error! Please try again!
    </b>
  );
};
export default ErrorMessage;
