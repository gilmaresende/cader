
import './App.css';
import Card from './components/components/card/Card';
import InputDate from './components/components/inputs/InputDate';
import InputPassword from './components/components/inputs/InputPassword';
import InputReais from './components/components/inputs/InputReais';
import InputTxt from './components/components/inputs/InputTxt';

function App() {
  return (
    <div>
      <div>

        <div className="line">
          <InputDate
            label="Data Cadastro"
          />

        </div>
        <div className="line">
          <InputTxt label="Nome" />

        </div>

        <div className="line">
          <InputPassword label="Senha" />

        </div>

        <div className="line">

          <InputReais />
        </div>

      </div>
      <Card >dev3</Card>
      <div className='container'>
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
