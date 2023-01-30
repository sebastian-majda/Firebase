import { Link } from "react-router-dom";
import "./Layout.css";

export function Layout({ children }) {
  return (
    <div>
      <header className="app-bar">
        <h1>
          <Link to="/">
            <span className="inverted">Info</span> share
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
