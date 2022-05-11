import React, { useState } from "react";
import Menu from "../components/Menu";
import api from "../api";

function Adicionar() {

    const [musicaInput, setMusicaInput] = useState('');
    const [artistaInput, setArtistaInput] = useState('');
    const [generoInput, setGeneroInput] = useState('');
    const [anoInput, setAnoInput] = useState('');
    const [imgInput, setImgInput] = useState('');

    function enviarDados(evento){

        evento.preventDefault();
        
        const objetoFormatado = {

            titulo: musicaInput,
            artista: artistaInput,
            genero: generoInput,
            ano: anoInput,
            imagem: imgInput

        }

        api.post("/musicas",objetoFormatado).then((repostaObtida) => {

            console.log(repostaObtida)

        }).catch((erroOcorrido) =>{

            console.log(erroOcorrido);

        });

    }

    return(
    <>
        <Menu />
        <div className="container">
        <div className="add-music">

            <div className="formulario">

                <h1>adicionar</h1>

                <br/>

                <form onSubmit={enviarDados}>
                    <label>Música: <br/><input onInput={(evento) =>{setMusicaInput(evento.target.value)}} type="text"/></label>
                    <br/>
                    <label>Artista: <br/><input onInput={(evento) =>{setArtistaInput(evento.target.value)}} type="text" /></label>
                    <br/>
                    <label>Genêro: <br/><input onInput={(evento) =>{setGeneroInput(evento.target.value)}} type="text" /></label>
                    <br/>
                    <label>Ano de Lançamento: <br/><input onInput={(evento) =>{setAnoInput(evento.target.value)}} type="text" /></label>
                    <br/>
                    <label> Imagem (url): <br/><input onInput={(evento) =>{setImgInput(evento.target.value)}} type="text" /></label>
                    <br/>
                    <button type="submit" className="btn">Enviar</button>

                </form>
            </div>

            <div className="img-lateral">
                <img src="../imagens/half-circles-pink-blue.png" alt="" />
            </div>

        </div>
    </div>
    </>)

}

export default Adicionar;