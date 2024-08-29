"use client";

import Image from "next/image";
//import styles from "./page.module.css";
import { ThemeProvider, Box } from "@mui/material";
import Hero from "./components/hero";
import Head from "next/head";
import Navbar from "./components/navbar";
import Theme from "./components/theme";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Car Buddy</title>
        <meta name="description" content="Car Buddy"></meta>
      </Head>
      <Box
        sx={{
          background: Theme.palette.primary.main,
        }}
        width="100%"
        height="100%"
      >
        <Navbar></Navbar>
        <Hero></Hero>
      </Box>
    </ThemeProvider>
  );
}
