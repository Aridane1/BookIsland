import "../../../tailwind.config"
import logo from "../../assets/Logos/Logo4.svg"
export const SimpleHeader = () => {
  return (
    <header className="h-20 bg-primary" >
        <img src={logo} alt="logo" className="h-full p-2 bg-primary" />
    </header>
  )
}
