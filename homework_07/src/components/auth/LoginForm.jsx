import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router";



export default function LoginForm() {
  const [loginUser, setLoginUser] = useState({
    email:"",
    password:""
  });
  
  const useLoginMutation = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    useLoginMutation.mutate(loginUser);
  };

  return (
    <>
    <form  onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          placeholder="john@example.com"
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser((prevState) => ({ ...prevState, email: e.target.value }))
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="12345678"
          value={loginUser.password}
          onChange={(e) =>
            setLoginUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      {useLoginMutation.isError && <p >Error: {useLoginMutation.error.message}</p>}
      <button>Log in</button>

    </form>
    <p>Do not have account ? <Link to={"/register"}>Create Account</Link></p>
    </>
  );
}