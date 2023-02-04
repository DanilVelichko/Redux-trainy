import { useDispatch } from "react-redux";
import { logIn } from "redux/user/userSlice";


export const LoginForm = () => {

    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login"></input>
      <br />
      <button type="submit">Log-in</button>
    </form>
  );
};
