import logo from './images/TEVY_logo.png';
import './App.css';

function App() {
  return (
    <div>
        <div className='image-container'>
          <img src={logo} alt="T.E.V.Y. logo"/>
        </div>
        <h2>Mission:</h2>
        <p>"Through our underrepresented perspective, we aim to publicise and scrutinise overlooked issues that are particularly pertinent to the health of society. We consequently present inventive solutions, and therefore facilitate much-needed discussions, while making complex economic ideas more approachable."</p>

        <h2>Vision:</h2>
        <p>"A world where all decisions affecting the youth are well informed."</p>
    </div>
  );
}

export default App;
