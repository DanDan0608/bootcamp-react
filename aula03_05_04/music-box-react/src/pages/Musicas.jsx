import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

function Musicas(){

    return (
        <>
        
        <Menu />
    <div className="container">
        <div className="filter">
            <button className="btn">Adicionar</button>
        </div>
    </div>

    <div className="container">
        <div className="music-boxes">

        <div className="icons">
            <img src="../imagens/edit-icon.png" alt="" />
            <img src="../imagens/delete-icon.png" alt="" />
        </div>

        <ItemMusica musica="Musica01" artista="artista1" categoria="categoria1" ano={2000}/>
        <ItemMusica musica="Musica02" artista="artista2" categoria="categoria2" ano={2003}/>
        <ItemMusica musica="Musica03" artista="artista3" categoria="categoria3" ano={2006}/>
        <ItemMusica musica="Musica04" artista="artista4" categoria="categoria4" ano={2009}/>
        <ItemMusica musica="Musica05" artista="artista5" categoria="categoria5" ano={2012}/>
        <ItemMusica musica="Musica06" artista="artista6" categoria="categoria6" ano={2015}/>
        <ItemMusica musica="Musica07" artista="artista7" categoria="categoria7" ano={2018}/>

        </div>
    </div>
        </>
    )

}

export default Musicas;