import React from "react";
import ItemMusica from "../components/ItemMusica"; // importando o componente de card de música como "ItemMusica"
import Menu from "../components/Menu"; // importando o componente de header como "Menu"
import api from "../api";
import { useState, useEffect } from "react";

function Musicas() { // componente Musicas que retorna fragmento JSX
  
    const [musicas, setMusicas] = useState(new Array());

    useEffect(() => {

      buscarDados();

    }, []);

  function buscarDados(){

    console.log(api.get());

    api.get().then((respostaObtida) => {

      console.log(respostaObtida);

      setMusicas(respostaObtida.data);

    }).catch(function(erroOCorrido){

      console.log(erroOCorrido);

    });
  }


  return (
    <>
      <Menu /> {/* utilizando componente de Menu */}
      <div className="container"> {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="filter"> {/* componente com classe "filter", utilizando className do React pois class é reservada do sistema */}
          <button onClick={buscarDados} className="btn">Adicionar</button> {/* componente com classe "btn", utilizando className do React pois class é reservada do sistema */}
        </div>
      </div>

      <div className="container"> {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="music-boxes"> {/* componente com classe "music-boxes", utilizando className do React pois class é reservada do sistema */}

            {
              musicas.map((item) =>{

                return (
                  <>

                    <ItemMusica key={item.id} artista={item.artista} musica={item.titulo} categoria={item.genero} ano={item.ano}/>

                  </>
                )

              })
            }

        </div>
      </div>
    </>
  );
}

export default Musicas; // exportando função Musicas para usarmos o componente em outros arquivos