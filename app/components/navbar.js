import {
  AppBar,
  Toolbar,
  Button,
  Box,
  ThemeProvider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import Theme from "./theme";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import db from "@/firebase"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleRedirectContactUs = () => {
    router.push("/contact-us");
  };

  const handleRedirectFaq = () => {
    router.push("/faq");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStatus({ type: "", message: "" });
  };

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
      setTimeout(() => {
        handleClose();
      }, 2000); // Close the dialog after 2 seconds
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.error("Error adding document: ", error);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              <a href="/">
                <img
                  src="/logo.png"
                  width={70}
                  height={31}
                  alt="logo car buddy"
                />
              </a>
            </Box>
            <Box>
              <Button
                variant="text"
                sx={{
                  boxShadow: "none",
                  fontFamily: "Montserrat",
                  color: Theme.palette.text.green,
                  fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "18px" },
                  padding: {
                    xs: "4px 5px 4px 20px",
                    sm: "4px 5px 4px 20px",
                    md: "4px 30px 4px 30px",
                    lg: "4px 30px 4px 30px",
                  },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={handleRedirectFaq}
              >
                FAQ
              </Button>
              <Button
                variant="text"
                sx={{
                  boxShadow: "none",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "18px" },
                  padding: {
                    xs: "4px 20px 4px 0px",
                    sm: "4px 20px, 4px 0px",
                    md: "8px 30px 4px 0px",
                    lg: "8px 30px 4px 0px",
                  },
                  color: Theme.palette.text.green,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={handleRedirectContactUs}
              >
                Contact US
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  background: Theme.palette.primary.green,
                  borderRadius: 6,
                  padding: {
                    xs: "4px 20px",
                    sm: "4px 20px",
                    md: "8px 40px",
                    lg: "8px 40px",
                  },
                  color: "black",
                  textTransform: "none",
                }}
                onClick={handleClickOpen}
              >
                JOIN NOW
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            background: `linear-gradient(to bottom, black, #005852)`,
            borderRadius: 6,
          },
        }}
      >
        <DialogTitle sx={{ color: Theme.palette.primary.green }}>
          Join the Waitlist
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: Theme.palette.primary.green }}>
            Get in!
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ sx: { color: "white" } }}
            InputProps={{ sx: { color: "white" } }}
          />
          {status.message && (
            <DialogContentText
              sx={{
                color:
                  status.type === "error" ? "red" : Theme.palette.primary.green,
                mt: 2,
              }}
            >
              {status.message}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: Theme.palette.text.green }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            sx={{ color: Theme.palette.text.green }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Navbar;
