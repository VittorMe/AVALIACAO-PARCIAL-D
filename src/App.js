
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Questao01X from '../src/components/Questao01/Questao01X'
import Questao02 from '../src/components/Questao02/Questao02'
import Questao03 from '../src/components/Questao03/Questao03'

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Questao01X />
        <hr></hr>
        <Questao02/>
        <hr></hr>
        <Questao03/>
      </CssBaseline>

    </div>
  );
}

export default App;
