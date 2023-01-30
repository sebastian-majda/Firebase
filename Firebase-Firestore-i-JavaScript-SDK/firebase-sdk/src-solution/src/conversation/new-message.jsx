import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../firebase";

export function NewMessage({ id }) {
  const firstInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { author, message } = event.currentTarget.elements;
    addDoc(collection(db, "conversations", id, "messages"), {
      author: author.value,
      message: message.value,
      createdAt: Date.now(),
    });
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
