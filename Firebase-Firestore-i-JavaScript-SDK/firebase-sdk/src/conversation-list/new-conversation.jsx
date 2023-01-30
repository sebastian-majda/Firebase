import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Add } from "@mui/icons-material";

export function NewConversation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onConversationCreate = (event) => {};

  return (
    <>
      <IconButton
        label="Dodaj konwersację"
        onClick={() => setIsModalOpen(true)}
      >
        <Add />
      </IconButton>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <DialogTitle>Rozpocznij konwersację</DialogTitle>
        <DialogContent>
          <form onSubmit={onConversationCreate}>
            <TextField fullWidth name="title" label="Nazwa konwersacji" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Anuluj</Button>
          <Button variant="contained" type="submit">
            Rozpocznij
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
