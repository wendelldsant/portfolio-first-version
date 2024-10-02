import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between px-4">
      <div className="">
        <h1>Wendell</h1>
      </div>
      <nav className="flex-grow flex justify-center">
        <ul className="flex gap-4">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/projects'>Projetos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
