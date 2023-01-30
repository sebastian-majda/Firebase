import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import { Input } from "../shared/Input";

export function RegisterForm({ onSubmit }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, repeatedPassword } = event.target.elements;
    const form = {
      email: email.value,
      password: password.value,
      repeatedPassword: repeatedPassword.value,
    };
    if (form.password === form.repeatedPassword) {
      await onSubmit(form);
    }
  };

  return (
    <Card className="guest-homepage-card">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Account data</legend>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <Input
            label="Repeat Password"
            type="password"
            name="repeatedPassword"
          />
          <Button type="submit">Register</Button>
        </fieldset>
      </form>
    </Card>
  );
}
