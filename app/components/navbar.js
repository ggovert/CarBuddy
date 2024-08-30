import { AppBar, Toolbar, Button, Box, ThemeProvider } from "@mui/material";
import Theme from "./theme";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const handleRedirectContactUs = () => {
    router.push("/contact-us");
  };
  const handleRedirectFaq = () => {
    router.push("/faq");
  };

  // _____________________________ Nav Bar UI _____________________________

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'black' }} // Corrected syntax
      >
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
                  href="/"
                  width={70}
                  height={31}
                  alt="logo car buddy"
                />
              </a>
            </Box>
            <Box>
              {/* <Button
                variant="outlined"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "none",
                  fontFamily: "Poppins",
                  backgroundColor: Theme.palette.primary.dark,
                  "&:hover": {
                    bgcolor: Theme.palette.text.darker,
                  },
                }}
                onClick={handleRedirectChatbot}
              >
                Chat with AI
              </Button> */}
              <Button
                variant="text"
                sx={{
                  boxShadow: "none",
                  fontFamily: "Montserrat",
                  color: Theme.palette.text.green,
                  fontSize: "18px",

                  textDecoration: "none", // Ensure no underline by default
                  "&:hover": {
                    textDecoration: "underline", // Add underline on hover
                  },
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
                  fontSize: "18px",
                  color: Theme.palette.text.green,
                  textDecoration: "none", // Ensure no underline by default
                  "&:hover": {
                    textDecoration: "underline", // Add underline on hover
                  },
                }}
                onClick={handleRedirectContactUs}
              >
                Contact US
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
