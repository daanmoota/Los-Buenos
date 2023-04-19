import { Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom/client"
import Produtos from "../telas/Produtos";
import Acompanhamentos from "../telas/Acompanhamentos";
import Bebidas from "../telas/Bebidas"
import Sobremesas from "../telas/Sobremesas";


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/acompanhamentos" element={<Acompanhamentos />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/sobremesas" element={<Sobremesas />} />

        </Routes>
    );
}