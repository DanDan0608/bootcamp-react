import React from "react";

function ItemMusica(props){

    return(

        <>

            <div className="card-music">
                <div className="icons">
                    <img src="../imagens/edit-icon.png" alt="" />
                    <img src="../imagens/delete-icon.png" alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">Musica: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.musica} />
                    </p>
                    <p>
                        <strong className="card-title">Artista: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.artista} />
                    </p>
                    <p>
                        <strong className="card-title">Categoria: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.categoria} />
                    </p>
                    <p>
                        <strong className="card-title">Ano: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.ano} />
                    </p>
                    <button className="btn-salvar-enable">Salvar</button>
                </div>
            </div>

        </>

    );

}

export default ItemMusica;