import React from "react";
import { Flex } from "@chakra-ui/react";
import "./App.css";
import { Header, Home, Navbar } from "./components";

function App() {
  return (
    <Flex w="100%" h="100vh" flexDir="column">
      <Header />
      <Navbar />
      <Home />
    </Flex>
  );
}

export default App;
