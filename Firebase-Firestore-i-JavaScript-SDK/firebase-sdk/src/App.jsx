import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Conversation } from "./conversation";
import { ConversationList } from "./conversation-list";
import { db } from "./firebase";
import { onSnapshot, collection, doc } from "firebase/firestore"; //musi być taki zapis "firebase/firestore" bo z tej biblioteki

function App() {
  return (
    <BrowserRouter>
      <Stack
        sx={{ height: "calc(100% - 48px)", gap: "24px", padding: "24px" }}
        direction="row">
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route
              element={
                <Typography variant="h4">Select a conversation :</Typography>
              }
              path="/"
            />
            <Route element={<Conversation />} path=":id" />
          </Routes>
        </Box>
        <ConversationList />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
