import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useRef } from "react";

export function NewMessage({ id }) {
  const firstInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { author, message } = event.currentTarget.elements;
    message.value = "";
    firstInputRef.current.focus();
  };

  return (
    <Stack sx={{ marginTop: "24px" }} component="form" onSubmit={handleSubmit}>
      <TextField
        autoFocus
        inputRef={firstInputRef}
        fullWidth
        name="message"
        required
        label="Wiadomość"
      />
      <TextField
        sx={{ margin: "24px 0" }}
        fullWidth
        name="author"
        required
        label="Autor"
      />
      <Button variant="outlined" type="submit">
        Dodaj
      </Button>
    </Stack>
  );
}
