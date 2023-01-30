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

export function ConversationList() {
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();

  const deleteConversation = (id) => {};

  return (
    <Paper>
      <List
        sx={{
          bgcolor: "background.paper",
          overflowY: "auto",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <ListSubheader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Konwersacje <NewConversation />
        </ListSubheader>
        {conversations.map((conversation) => (
          <ListItem
            key={conversation.id}
            secondaryAction={
              <IconButton
                onClick={() => deleteConversation(conversation.id)}
                edge="end"
                aria-label="Usun konwersacje"
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemButton component={NavLink} to={conversation.id}>
              <ListItemText>{conversation.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
