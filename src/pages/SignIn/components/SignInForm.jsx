import { Link } from "react-router-dom";
import logo from "../../../assets/image 1.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function SignInForm() {
  return (
    <form className="flex w-full max-w-[420px] flex-col items-center">
      <h2 className="text-3xl ">Entrar na conta</h2>
      <div className="my-8 h-[120px] w-[120px] rounded-full bg-gray-500 ">
        <img src={logo} alt="keyslab wolf logo" />
      </div>

      <Input type="email" placeholder="nome@exemplo.com" />
      <Input type="password" placeholder="*********" />

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
