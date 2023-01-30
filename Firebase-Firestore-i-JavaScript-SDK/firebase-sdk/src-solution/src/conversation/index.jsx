import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { NewMessage } from "./new-message";

export function Conversation() {
  const conversationRef = useRef(null);
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "conversations", id, "messages"),
        orderBy("createdAt")
      ),
      ({ docs }) => {
        setMessages(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );
  }, [id]);

  useEffect(() => {
    conversationRef.current.scrollTo(0, conversationRef.current.scrollHeight);
  }, [messages]);

  return (
    <Box
      ref={conversationRef}
      sx={{
        flexBasis: "520px",
        height: "100%",
        overflowY: "auto",
        margin: "0 auto",
      }}
    >
      {messages.map(({ id, message, author, createdAt }) => (
        <Card key={id}>
          <CardContent>
            <Typography
              sx={{ fontSize: "0.7rem" }}
              color="text.secondary"
              gutterBottom
            >
              Od: {author},{" "}
              {new Intl.DateTimeFormat("pl-PL", {
                timeStyle: "medium",
                dateStyle: "medium",
              }).format(new Date(createdAt))}
            </Typography>
            {message}
          </CardContent>
        </Card>
      ))}
      <Paper sx={{ maxWidth: "520px", margin: "0 auto" }}>
        <NewMessage id={id} />
      </Paper>
    </Box>
  );
}
