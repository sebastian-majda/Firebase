import { useState } from "react";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

export function LoginForm({ onSubmit }) {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      });
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login to app :)</legend>
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />
        {loginError && <div role="alert">Login unsuccessful</div>}
        <div>
          <Button type="submit">Login</Button>
        </div>
      </fieldset>
    </form>
  );
}
