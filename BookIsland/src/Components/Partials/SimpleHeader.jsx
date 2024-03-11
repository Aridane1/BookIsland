import "../../../tailwind.config";
import logo from "../../assets/Logos/light-blue-fill.svg";
export const SimpleHeader = () => {
  return (
    <header className="h-20 w-full bg-primary fixed">
      <img src={logo} alt="logo" className="h-full p-2 bg-primary" />
    </header>
  );
};
