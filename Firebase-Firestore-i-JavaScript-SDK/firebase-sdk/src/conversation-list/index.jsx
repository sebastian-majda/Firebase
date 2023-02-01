import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NewConversation } from "./new-conversation";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export function ConversationList() {
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const conversationRef = collection(db, "conversations");
    const unsubscribe = onSnapshot(conversationRef, (data) => {
      const NewConversation = data.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
        };
      });
      setConversations(NewConversation);
    });
    return () => unsubscribe();
  }, []);

  const deleteConversation = async (id) => {
    const conversationDocument = doc(db, "conversations", id);
    await deleteDoc(conversationDocument);
    navigate("/");
  };

  return (
    <Paper>
      <List
        sx={{
          bgcolor: "background.paper",
          overflowY: "auto",
          height: "100%",
          padding: 0,
          margin: 0,
        }}>
        <ListSubheader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          Konwersacje <NewConversation />
        </ListSubheader>
        {conversations.map((conversation) => (
          <ListItem
            key={conversation.id}
            secondaryAction={
              <IconButton
                onClick={() => deleteConversation(conversation.id)}
                edge="end"
                aria-label="Usun konwersacje">
                <Delete />
              </IconButton>
            }>
            <ListItemButton component={NavLink} to={conversation.id}>
              <ListItemText>{conversation.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
