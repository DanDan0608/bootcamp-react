const container = document.getElementById("app");

    // <h1></h1>
        // const titulo = document.createElement("h1");

    // <h1>Titulo com JS</h1>
        // titulo.innerHTML = "Titulo com JS";

        // container.appendChild(titulo);

    function Titulo(props){

        return (
            <div>
                <h2>{props.texto}</h2>
            </div>
        );

    }

    function Titulos(){

        return (
            <div>

                <Titulo texto="Eu sou o primeiro Título"></Titulo>
                <Titulo texto="Eu sou o segundo Título"></Titulo>
                <Titulo texto="Eu sou o último Título"></Titulo>

            </div>
        );

    }
    
    ReactDOM.render(Titulos(), container);