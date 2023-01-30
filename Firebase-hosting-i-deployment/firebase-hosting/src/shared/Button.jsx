import "./Button.css";

export function Button({ className, white, ...props }) {
  return (
    <button
      className={`button ${white ? "white" : ""} ${className}`}
      {...props}
    />
  );
}
