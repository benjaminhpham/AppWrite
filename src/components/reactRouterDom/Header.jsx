import { Link } from "react-router-dom";

export default function Header() {
  return (
    <heade>
      <nav>
        <li>
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1506355683710-bd071c0a5828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
              height={25}
              width={25}
            />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user">User</Link>
          <Link to="/github">Github</Link>
        </li>
      </nav>
    </heade>
  );
}
