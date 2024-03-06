import { Link } from "react-router-dom"
import { LoginForm } from "../../Components/AppRouter/Forms/LoginForm"
import { SimpleHeader } from "../../Components/Partials/SimpleHeader"

export const LoginPage = () => {
  return (
    <>
      <SimpleHeader></SimpleHeader>
      <LoginForm></LoginForm>
    </>


    )
}
