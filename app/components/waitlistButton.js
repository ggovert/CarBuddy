"use client";
// JoinWaitlistButton.js
import React, { useState } from "react";
import db from "@/firebase"; // Adjust the import path as necessary
import { Button, TextField, Alert, Box, Container,InputAdornment } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import Theme from '../components/theme';

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!email) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: new Date(),
      });
      setStatus({
        type: "success",
        message: "You have been added to the waitlist!",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <TextField
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          margin="normal"
          InputProps={{
            sx: { borderRadius: 6, backgroundColor: '#FFFFFF' }, 
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    background: Theme.palette.primary.green,
                    borderRadius: 6,
                    padding: '8px 16px',
                    color: 'black',
                    textTransform: 'none',
                  }}
                >
                  Join!
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiInputBase-input': {
              color: '#998080', 
            },
          }}
        />
        {status.message && (
          <Alert
            severity={status.type === "error" ? "error" : "success"}
            sx={{ mt: 2 }}
          >
            {status.message}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default JoinWaitlist;
