import { RegisterForm } from "../../Components/Partials/Forms/RegisterForm";
import { SimpleFooter } from "../../Components/Partials/SimpleFooter";
import { SimpleHeader } from "../../Components/Partials/SimpleHeader";
import "../../../src/global.css"


export const RegisterUserPage = () => {
  return (
    <>
      <SimpleHeader></SimpleHeader>
      <RegisterForm></RegisterForm>
      <SimpleFooter></SimpleFooter>
    </>
  );
};
