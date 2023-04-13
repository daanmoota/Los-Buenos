import React, { useState, useEffect } from "react";
import { ChakraProvider, Container, background, theme, Box, Grid,} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Produtos from "./telas/Produtos";
import Rotas from "./rotas/Rotas";
import imagens from "./assets/imagens";


 export default function App() {

  return(
    <ChakraProvider theme={theme}>
    <body>
    <Navbar>
      <Rotas/>
    </Navbar>
    </body> 
  </ChakraProvider>
  )

}
