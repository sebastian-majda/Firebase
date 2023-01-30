import { useId } from "react";
import "./Input.css";

export function Input({ label, className, ...props }) {
  const id = useId();

  return (
    <div className={`input ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
