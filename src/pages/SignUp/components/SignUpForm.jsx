import { Link } from "react-router-dom";
import logo from "../../../assets/image 1.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";

function SignUpForm() {
  return (
    <form className="flex w-full max-w-[420px] flex-col items-center">
      <h2 className="text-3xl ">Se Registre</h2>
      <div className="my-8 h-[120px] w-[120px] rounded-full bg-gray-500 ">
        <img src={logo} alt="keyslab wolf logo" />
      </div>

      <Label id="email">Email</Label>
      <Input id="email" type="email" placeholder="nome@exemplo.com" />
      <Label id="password">Senha</Label>
      <Input id="password" type="password" placeholder="*********" />

      <Link to="/" className="color-secondary ml-auto ">
        Voltar
      </Link>

      <Button>Cadastrar</Button>
    </form>
  );
}

export default SignUpForm;
