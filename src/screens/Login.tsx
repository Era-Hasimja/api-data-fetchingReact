interface Props {
  onClickButton: () => void;
}

export const Login = (props: Props) => {
  return(
    <div className="login">
      <h1>LOGIN</h1>
      <form className="login_form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={props.onClickButton} type="submit">Kyqu</button>
      </form>
    </div>
  )
};
