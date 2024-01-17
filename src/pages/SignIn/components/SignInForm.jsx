import { Link } from "react-router-dom";
import logo from "../../../assets/image 1.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    if (!email.includes("@")) {
      setErrors((state) => ({ ...state, email: "Seu email deve conter @" }));
      return;
    }

    if (password.length < 8) {
      setErrors((state) => ({
        ...state,
        password: "Sua senha deve conter pelo menos 6 caracteres.",
      }));
      return;
    }

    console.log("form enviado");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[420px] flex-col items-center"
    >
      <h2 className="text-3xl ">Entrar na conta</h2>
      <div className="my-8 h-[120px] w-[120px] rounded-full bg-gray-500 ">
        <img src={logo} alt="keyslab wolf logo" />
      </div>

      <Input
        type="email"
        placeholder="nome@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email.length > 0 && (
        <p className=" mr-auto text-rose-500">{errors.email}</p>
      )}
      <Input
        type="password"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errors.password.length > 0 && (
        <p className="mb-2 mr-auto text-rose-500">{errors.password}</p>
      )}

      <p className="color-secondary ml-auto w-full max-w-[140px] whitespace-nowrap text-sm underline">
        Esqueci minha senha
      </p>
      <Button>Entrar na conta</Button>
      <p className="color-secondary text-sm">
        Ainda não tem conta?
        <Link className=" ml-2 underline" to="/register">
          Registre-se.
        </Link>
      </p>
    </form>
  );
}

export default SignInForm;
