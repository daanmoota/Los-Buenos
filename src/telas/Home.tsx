import React from "react";
import imagens from "../assets/imagens";
import './home.css'
import { background, theme, Box, Grid, Switch } from "@chakra-ui/react";
import Rotas from "../rotas/Rotas";
import App from "../App";


export default function Home() {
  

  return (
    <div>
      <nav style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between" }}>
        <div>
          <img className="logo" src={imagens.logoDois}/>
        </div>
        <ul className="nav-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contatos">Contatos</a></li>
        </ul>
      </nav>
      <div>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a onClick={() => App()}>Clique aqui</a>
        </header>
        <Rotas/> 
      </div>
    </div>
  );
}
