/** @format */

// import "./header.scss";
// import logo from "../../assets/Logo/BrainFlix-logo.svg";

import "./Button.scss";

const Button = ({ className, label }) => {
  return <button className={className}>{label}</button>;
};
export default Button;
