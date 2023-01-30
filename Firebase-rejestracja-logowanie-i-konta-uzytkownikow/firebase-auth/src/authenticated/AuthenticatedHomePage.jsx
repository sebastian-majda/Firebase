import { Button } from "../shared/Button";
import { Card } from "../shared/Card.jsx";
import "./AuthenticatedHomePage.css";

export function AuthenticatedHomePage({ onLogOut, currentUser }) {
  return (
    <>
      <div className="logout-button">
        {currentUser.email}
        <Button white onClick={onLogOut}>
          Log Out
        </Button>
      </div>
      <Card className="authenticated-homepage-card">
        Logged in as:{" "}
        <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
      </Card>
    </>
  );
}
