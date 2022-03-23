const container = document.getElementById("app");

function Votacao(props){

    // let contador = 0;
    /*
        Ele cria um getter (contador) e um setter (setContador) para mudar o estado da constante
    */
    /* 
        O React.useState(0) define que quando ele for alterado, todo lugar onde chama o getter (contador)
        Ele vai alterar na hora, em outras palavras, ele ficará observando, e quando o valor mudar,
        ele vai renderizar na página o novo valor.
    */ 
    const [contador, setContador] = React.useState(0);
    
    function votarMais(){

        setContador(contador+1);

    }

    function votarMenos(){

        setContador(contador-1);

    }

    return (
        <div>
            <h3>{props.nomeFilme}</h3>
            votos: {contador} <br/>
            {/* <button onclick="">Votar</button> */}
            <button onClick={votarMais}>+</button>
            <button onClick={votarMenos}>-</button>  
        </div>
    );
}

function App(){

    return(
        <div>
            <Votacao nomeFilme="Lua Nova"></Votacao>
            <Votacao nomeFilme="Dois filhos de Francisco"></Votacao>
            <Votacao nomeFilme="Batman"></Votacao>
            <Votacao nomeFilme="Gente Grande"></Votacao>
            <Votacao nomeFilme="Shrek"></Votacao>
        </div>
    );

}

ReactDOM.render(App() ,container);