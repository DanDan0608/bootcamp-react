import React from "react";
import Musicas from "./pages/Musicas"; // importando o componente de página de músicas (com os cards) como "Musicas"
import Adicionar from "./pages/Adicionar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Musicas />}/>
                    <Route path="/cadastrar" element={<Adicionar />}/>
                    <Route />
                    <Route />
                    <Route />
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default Rotas;