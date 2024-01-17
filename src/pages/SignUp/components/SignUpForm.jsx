import { Link } from "react-router-dom";
import logo from "../../../assets/image 1.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import { useState } from "react";

function SignUpForm() {
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
    if (password.length < 6) {
      setErrors((state) => ({
        ...state,
        password: "Sua senha deve conter pelo menos 6 caracteres.",
      }));
      return;
    }
    console.log("conta criada");
    setEmail("");
    setPassword("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[420px] flex-col items-center"
    >
      <h2 className="text-3xl ">Se Registre</h2>
      <div className="my-8 h-[120px] w-[120px] rounded-full bg-gray-500 ">
        <img src={logo} alt="keyslab wolf logo" />
      </div>

      <Label id="email">Email</Label>
      <Input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="nome@exemplo.com"
      />
      {errors.email.length > 0 && (
        <p className=" mr-auto text-rose-500">{errors.email}</p>
      )}
      <Label id="password">Senha</Label>
      <Input
        id="password"
        type="password"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password.length > 0 && (
        <p className="mb-2 mr-auto text-rose-500">{errors.password}</p>
      )}
      <Link to="/" className="color-secondary ml-auto ">
        Voltar
      </Link>

      <Button>Cadastrar</Button>
    </form>
  );
}

export default SignUpForm;
