import { Link } from "react-router-dom";
import { Card } from "../shared/Card.jsx";
import { LoginForm } from "./LoginForm";
import "./GuestHomePage.css";

export function GuestHomePage({ onLogin }) {
  return (
    <Card className="guest-homepage-card">
      <LoginForm onSubmit={onLogin} />
      <p>
        Don't have an account yet? <Link to="/register">Register now</Link>
      </p>
    </Card>
  );
}
