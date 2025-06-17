import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState('');
  const [personas, setPersona] = useState([]);
  const [nuevaPersona, setNuevaPersona] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/personas') 
      .then(res => res.json())
      .then(data => setPersona(data))
      .catch(err => console.error('Error al conectar con backend:', err));
  }, []);

    const agregarPersona = () => {
    fetch('http://localhost:3000/api/personas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nuevaPersona })
    })
      .then(res => res.json())
      .then(persona => {
        setPersona([...personas, persona]);
        setNuevaPersona('');
      });
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DDS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
      <h1>Clientes</h1>
        <ul>
          {personas && personas.map(t => <li key={t.id}>{t.nombre} - {t.edad} años</li>)}
        </ul>
        <input
          value={nuevaPersona}
          onChange={e => setNuevaPersona(e.target.value)}
          placeholder="Nueva persona"
        />
        <button onClick={agregarPersona}>Agregar</button>
      </div>
    </>
  )
}

export default App
