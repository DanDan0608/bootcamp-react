const container = document.getElementById("app");

function ContaBancaria(props){

    const [getContador, setContador] = React.useState(0);

    function soma10(){

        setContador(getContador+10);
    
    }

    function subtrai10(){

        setContador(getContador-10);
    
    }

    return(
        <div>
            <h2>O valor da conta bancária do {props.nome}: {getContador}</h2>
            <button onClick={soma10}>Depositar 10</button>
            <button onClick={subtrai10}>Sacar 10</button>
        </div>
    );

}

function App(){

    return(
        <div>
            <ContaBancaria nome="Daniel"></ContaBancaria>
        </div>
    );

};

ReactDOM.render(App(), container);