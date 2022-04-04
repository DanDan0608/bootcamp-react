import React from "react";

function Votacao(){

    const [votos, setVotos] = React.useState(0);

    function votar(){

        setVotos(votos+1);

    }

    return(
        <React.Fragment>
            Votos: {votos} <br />
            <button onClick={votar}>Votar</button>

        </React.Fragment>
    )

}

export default Votacao