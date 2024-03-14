import { LoginForm } from "../../Components/Partials/Forms/LoginForm";
import { SimpleHeader } from "../../Components/Partials/SimpleHeader";
import { SimpleFooter } from "../../Components/Partials/SimpleFooter";
import "../../../src/global.css"


export const LoginPage = () => {
  return (
    <>
      <SimpleHeader />
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
      <SimpleFooter />
    </>
  );
};
