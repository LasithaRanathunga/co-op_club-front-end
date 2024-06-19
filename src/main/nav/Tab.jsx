import { NavLink } from "react-router-dom";

export default function Tab({ to, text }) {
  return (
    <div className="pl-6 text-2xl hover:text-bold hover:bg-blue-400 py-4 w-full">
      <NavLink to={to}>{text}</NavLink>
    </div>
  );
}
