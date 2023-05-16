import { useEffect } from "react";

const Questao01Y = ({ Dados, Medias }) => {

    //Calculando as médias das aplicações
    const mediasAplicacoes = (dados) => {
        const { pp, rf, cc } = dados;
        return (pp + rf + cc) / 3;
    }

    useEffect(() => {
        // Calcular as médias quando o componente for montado
        const medias = Dados.map(dado => mediasAplicacoes(dado.aplic));

        // Chamar a função de retorno de chamada para passar as médias para o componente pai
        Medias(medias);
    }, [Dados, Medias]);
   

    return (
        <></>
    )
}

export default Questao01Y
