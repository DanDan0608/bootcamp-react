import React, { useState } from "react";
import editIcon from "../html-css-template/imagens/edit-icon.png"; // importando imagem com ícone de EDITAR como uma variável para ser utilizada
import deleteIcon from "../html-css-template/imagens/delete-icon.png"; // importando imagem com ícone de DELETAR como uma variável para ser utilizada
import capaPadrao from "../html-css-template/imagens/capa.png"; // importando imagem de capa padrão para usarmos caso não haja um endereço de imagem na API
import api from "../api";

function ItemMusica(props) { // componente ItemMusica que recebe parâmetros como "props" e retorna fragmento JSX

  const [editavel, setEditavel] = useState(false);

  const [musicaInput, setMusicaInput] = useState(props.musica);
  const [artistaInput, setArtistaInput] = useState(props.artista);
  const [categoriaInput, setCategoriaInput] = useState(props.categoria);
  const [anoInput, setAnoInput] = useState(props.ano);

  function editar(){

    console.log("Musica: " + musicaInput);
    console.log("Artista: " + artistaInput);
    console.log("Categoria: " + categoriaInput);
    console.log("Ano: " + anoInput);

    const objetoFormatado = { // objeto JSON {}
      titulo: musicaInput,    // atributo "título" com o valor do estado musicaInput
      artista: artistaInput,  // atributo "artista" com o valor do estado artistaInput  
      genero: categoriaInput,    // atributo "genero" com o valor do estado generoInput
      ano: anoInput,          // atributo "ano" com o valor do estado anoInput
    };
  
    api.put(`/${props.id}`, objetoFormatado).then((respostaObtida) => {
  
      console.log("resposta:" + respostaObtida);
      setEditavel(false);
  
    }).catch((erroOcorrido) => {
  
      console.log("erro:" +erroOcorrido);
      setEditavel(true);

    })

  }

  // constante que representa uma configuração de estilo CSS para alterar o background-image através do JS  
  const backgroundImage = {
    backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})` // interpolando a URL da imagem, utilizando um ternário para verificar se a URL da imagem deve ser a capaPadrao, caso a imagem da API (props.imagem) esteja vazia
  } 
  
  return (
    <>
      <div className="card-music" style={backgroundImage}>  {/* sobrescrevendo imagem de fundo com a configuração de estilo que criamos acima, renderizando a imagem da API ou a capa padrão caso a API não possua imagem */}
        <div className="icons">  {/* componente com classe "icons", utilizando className do React pois class é reservada do sistema */}
          <img onClick={() => setEditavel(!editavel)} src={editIcon} alt="" /> {/* utilizando variável que representa a imagem com ícone de EDITAR */}
          <img onClick={() => props.funcaoDeletar(props.id)} src={deleteIcon} alt="" /> {/* utilizando onClick para disparar a funcaoDeletar que recebemos como props do Musicas.jsx, passando o ID da música */}
        </div>
        <div className="info-music"> {/* componente com classe "info-music", utilizando className do React pois class é reservada do sistema */}
          <p>
            <strong className="card-title">música: </strong>  {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input 
            disable={!editavel}
             className={editavel ? 'input-music-enable' : 'input-music-disabled'}
              type="text" defaultValue={musicaInput} 
              onInput={(evento) => setMusicaInput(evento.target.value)} /> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">artista: </strong>  {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input disable={!editavel}
             className={editavel ? 'input-music-enable' : 'input-music-disabled'}
              type="text" defaultValue={artistaInput}
              onInput={(evento) => setArtistaInput(evento.target.value)} /> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">categoria: </strong> {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input disable={!editavel}
             className={editavel ? 'input-music-enable' : 'input-music-disabled'}
              type="text" defaultValue={categoriaInput}
              onInput={(evento) => setCategoriaInput(evento.target.value)} /> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">ano: </strong> {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input disable={!editavel}
             className={editavel ? 'input-music-enable' : 'input-music-disabled'}
              type="text" defaultValue={anoInput}
              onInput={(evento) => setAnoInput(evento.target.value)} /> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <button onClick={editar} className={editavel ? 'btn-salvar-enable' : 'btn-salvar-disabled'}>Salvar</button> {/* componente com classe "btn-salvar-enable", utilizando className do React pois class é reservada do sistema */}
        </div>
      </div>
    </>
  );
}

export default ItemMusica; // exportando função ItemMusica para usarmos o componente em outros arquivos