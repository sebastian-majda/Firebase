import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { NewMessage } from "./new-message";
import { db } from "../firebase";

export function Conversation() {
  const conversationRef = useRef(null);
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesCollection = collection(db, "conversations", id, "messages");
    //powyzej mowimy na co chcemy nasłuchiwać( od bazy danych db, pozniej conversation, pozniej id. i poznej messages)
    const orderedQuery = query(messagesCollection, orderBy("createdAt")); //robimy to żeby kolejnosc komenatatrzy byla po dacie
    const unsubscribe = onSnapshot(orderedQuary, (data) => {
      //ustawiamy listinera, który będzie nasłuchiwać(onSnapshot- ktory pozwala widziec na biezaco zmiany, bez przeladowania)
      const newMessages = data.docs.map((doc) => {
        // data cały obiekt z firebase// docs to dziecko data (ale tak sie zawsze uzywa)
        // tworzymy nową zmienną(powyzej) i robimy mapowanie ( mamy 3 pola z firebase te co tutaj)
        const { author, message, createdAt } = doc.data(); // doc.data - umożliwia nam dostęp do wszystkich danych po destrukturyzacji data
        return { id: doc.id, author, message, createdAt }; // dzieki doc.datra mamy dostęp do id
      });
      setMessages(newMessages);
    });
    return () => unsubscribe(); //unsubsc. usuwa nam 1 konerwersacje(nasluchiwanie) i przełączamy sie na 2
  }, [id]); //zawsze jak zmienia nam sie id chcemy wprowadzić aktualizację

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
      }}>
      {messages.map(({ id, message, author, createdAt }) => (
        <Card key={id}>
          <CardContent>
            <Typography
              sx={{ fontSize: "0.7rem" }}
              color="text.secondary"
              gutterBottom>
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
