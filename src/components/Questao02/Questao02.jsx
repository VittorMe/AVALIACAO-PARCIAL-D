import { useEffect, useState } from "react";



// Nesse componente é onde irá pegar o click do usuario e virar a imagem, a "função" de virar a imgem está no próprio OnCLick


const Questao02 = () => {

    //boolean para verificar se foi clicado ou nao 
    const [click, setclick] = useState(false)

    //Referencia das URL's de cada iamgem 
    const URL_FRONT = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    const URL_BACK = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png ';


    return (
        <>
            <img

                src={
                    !click ?
                        URL_FRONT : URL_BACK} width="300" />

            <button
                onClick={
                    () => setclick(!click)
                }
            >Virar POKEMOM</button>
        </>
    )
}



export default Questao02