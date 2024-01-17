import { Link } from "react-router-dom";
import logo from "../../../assets/image 1.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    if (!email.includes("@")) {
      setErrors((state) => ({ ...state, email: "Seu email deve conter @" }));
      return;
    }

    setEmail("");
    console.log("email enviado");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[420px] flex-col items-center"
    >
      <h2 className="text-3xl ">Recuperação de senha</h2>
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
      <Link to="/" className="color-secondary ml-auto ">
        Voltar
      </Link>
      <Button>Recuperar</Button>
    </form>
  );
}

export default ForgetPassword;
