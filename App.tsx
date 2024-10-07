import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './assets/css/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define a rota inicial */}
        <Route path="/" element={<Home />} />
        {/* Define a rota para o componente Skills */}  
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

// Componente da página inicial
const Home = () => {
  return (
    <div className="curriculo-container">
      <Image />
      <h2>Caio Rodrigues</h2>
      <div className="input-group">
        <Linkedin />
      </div>
      <div className="input-group">
        <GitHub />
      </div>
      <div className="input-group">
        <Email />
      </div>
      <div className="input-group">
        <Link to="/skills" style={skillsButtonStyle}>
          Habilidades
        </Link>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="./assets/Caio_User.png"
      alt="Imagem do usuário"
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',  // Garante que a imagem preencha a área sem distorções
        marginBottom: '10px',
      }}
    />
  );
};

const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/caio-rodrigues-9a58191a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      Linkedin
    </a>
  );
};

const TellMe = () => {
  return (
    <a
      href="https://wa.me/554396521972"
      className="TellMe"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: '#006400',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      Fale comigo!
    </a>
  );
};

const GitHub = () => {
  return (
    <a
      href="https://github.com/ca10r0dr1gu3s"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'orange',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      GitHub
    </a>
  );
};

const Email = () => {
  return (
    <a
      href="mailto:forcecaio@gmail.com?subject=Assunto"
      className="Email"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'green',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      E-MAIL
    </a>
  );
};

// Estilo para o botão de skills
const skillsButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px',
  width: '95%',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  textAlign: 'center',
  cursor: 'pointer',
};

const backButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 20px',
  width: 'auto',
  backgroundColor: '#ff1e56',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '25px',
  textAlign: 'center',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const skillsListStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  textAlign: 'left',
};

const skillItemStyle: React.CSSProperties = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  fontWeight: '500',
};

const Skills: React.FC = () => {
  return (
    <div className="curriculo-container">
      <Image />
      <h2>Caio Rodrigues</h2>
      <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>Habilidades</h3>
      <ul style={skillsListStyle}>
        <li style={skillItemStyle}>TypeScript</li>
        <li style={skillItemStyle}>React</li>
        <li style={skillItemStyle}>Node.js</li>
        <li style={skillItemStyle}>JavaScript</li>
      </ul>
      <div className="input-group" style={{ marginTop: '20px' }}>
        <TellMe /> {/* Adiciona o botão TellMe aqui */}
      </div>
      <div className="input-group" style={{ marginTop: '20px' }}>
        <Link to="/" style={backButtonStyle}>
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default App;
