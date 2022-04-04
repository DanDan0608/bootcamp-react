import React, { useState } from 'react';
import api from './Api';
import Votacao from './components/votacao';

function App() {

  // Criando um estado que vai receber os dados que virá do mockapi
  const [musicas, setMusicas] = useState("");

  // funcão que irá buscar os dados lá no mockapi
  function buscar() {

    // o "api.get()" cria uma promessa, pois ele vai lá, tentar pegar todos os dados e
    // só quando ele conseguir pegar todos os dados, ele devolver uma resposta,
    // sendo que ela pode ser uma resposta 200 (ok) ou uma resposta errada.

    console.log(api.get());

    // o ".then() pega a resposta, se ela for "ok" e atribui ao estado a respostaObtida
    // dentro dessa resposta, ele entra em data, pega o objeto inteiro que estiver na 29 posicao,
    // e dele, ele pega só o titulo dele  usando o "setMusicas"

    api.get().then((respotaObtida) => {

      setMusicas(respotaObtida.data[29].titulo);

      // Caso dê erro, ele entra aqui
    }).catch((erroOcorrido) => {

      // e loga o erro obtido
      console.log(erroOcorrido);

    });

  }

  // ele retorna para quem chamar ele um component com os dados abaixo.
  // O React.Fragment serve para retornar tudo que precisa em uma div só
  // porque o return só aceita retornar uma tag, então colocamos tudo que
  // queremos dentro do React.Fragment, que equivale ao uma "div"
  // assim ele devolve apenas uma tag
  return (
    <React.Fragment>
      <h1>Músicas</h1>
      <h1>{musicas}</h1>

      <button onClick={buscar}>Buscar Dados</button>

      <br /><br />

      {/* Cria uma tag chamada votacao, que acessa o componente votacao dentro da pasta
       ./components/votacao */}
      <Votacao />

    </React.Fragment>
  );

}

export default App;
