import { AppBar, Toolbar, Button, Box, ThemeProvider,InputAdornment } from "@mui/material";
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
        sx={{ backgroundColor: 'black' }}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              <a href="/" >
                <img
                  src="/logo.png"
                  href="/"
                  width={70}
                  height={31}
                  alt="logo car buddy"
                  
                />
              </a>
            </Box>
            <Box >
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
                  fontSize: {
                    xs: "10px", 
                    sm: "12px", 
                    md: "12px", 
                    lg: "18px", 
                  },
                  padding: {
                    xs: '4px 5px 4px 20px', 
                    sm: '4px 5px 4px 20px', 
                    md: '4px 30px 4px 30px', 
                    lg: '4px 30px 4px 30px', 
                  },
                  textDecoration: "none", 
                  "&:hover": {
                    textDecoration: "underline", 
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
                  fontSize: {
                    xs: "10px", 
                    sm: "12px", 
                    md: "12px", 
                    lg: "18px", 
                  },
                  padding: {
                    xs: '4px 20px 4px 0px', 
                    sm: '4px 20px, 4px 0px', 
                    md: '8px 30px 4px 0px', 
                    lg: '8px 30px 4px 0px', 
                  },
                  color: Theme.palette.text.green,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline", 
                  },
                }}
                onClick={handleRedirectContactUs}
              >
                Contact US
              </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    background: Theme.palette.primary.green,
                    borderRadius: 6,
                    padding: {
                      xs: '4px 20px', 
                      sm: '4px 20px', 
                      md: '8px 40px', 
                      lg: '8px 40px', 
                    },
                    color: 'black',
                    textTransform: 'none',
                  }}
                >
                  JOIN NOW
                </Button>

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
