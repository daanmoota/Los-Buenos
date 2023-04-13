import { Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom/client"
import Produtos from "../telas/Produtos";
import Cadastro from "../telas/Cadastro";
import Home from "../telas/Home";
import Sobre from "../telas/Sobre";
import Contato from "../telas/Contato";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cardapio" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contatos" element={<Contato/>} />
        </Routes>
    );
}