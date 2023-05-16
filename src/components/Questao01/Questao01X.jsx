import { useState } from 'react'
import Questao01Y from '../Questao01/Questao01Y'

const Questao01X = () => {


    
    const [medias, setMedias] = useState([])
    const [correntistaMaiorMedia, setCorrentistaMaiorMedia] = useState('')

    const receberMedias = (medias) => {
        setMedias(medias)

        // Encontrar o índice do correntista com a maior média
        const indiceMaiorMedia = medias.indexOf(Math.max(...medias))
        // Obter o nome do correntista com a maior média
        const nomeCorrentistaMaiorMedia = correntistas[indiceMaiorMedia].nome
        // Definir o estado do nome do correntista com a maior média
        setCorrentistaMaiorMedia(nomeCorrentistaMaiorMedia)
    }

    const correntistas = [
        { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
        { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
        { nome: "Fulano", aplic: { pp: 5000.00, rf: 0.0, cc: 500 } }
    ]

    return (
        <div>
            <Questao01Y Dados={correntistas} Medias={receberMedias} />
            <h2>Média:</h2>
            <ul>
                {/* listando os correntista e suas médias */}
                {medias.map((media, index) => (
                    <li key={index}>{correntistas[index].nome} - Média: {media}</li>
                ))}
            </ul>
            <h2>Correntista com a maior média:</h2>
            <p>{correntistaMaiorMedia}</p>
        </div>
    );
}

export default Questao01X
