"use client";

import Image from "next/image";
//import styles from "./page.module.css";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import Hero from "./components/hero";
import Head from "next/head";
import Navbar from "./components/navbar";
import Theme from "./components/theme";
import FeaturesAI from "./features/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Head>
        <title>Car Buddy</title>
        <meta name="description" content="Car Buddy"></meta>
      </Head>

      <Box
        sx={{
          background: `linear-gradient(to bottom, black, #005852)`,
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
>
        <Navbar />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Hero />
            
          </Box>
          <Footer />
        </Box>
      
    </ThemeProvider>
  );
}
