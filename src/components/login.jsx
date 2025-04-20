import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      navigate('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <p style={styles.title}>Para registrarte debes rellenar el formulario a continuación</p>
          <input
            type="email"
            placeholder="Ingrese su correo"
            style={styles.input}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingrese su Nombre"
            style={styles.input}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" placeholder="Lorem ipsum dolor" style={styles.input} />
          <input type="text" placeholder="Lorem ipsum dolor" style={styles.input} />
          <input type="text" placeholder="Lorem ipsum dolor" style={styles.input} />
          <input type="text" placeholder="Lorem ipsum dolor" style={styles.input} />
          <button type="submit" style={styles.button}>Registrar</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',  // Ajusta el tamaño máximo de la caja
    margin: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '18px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid red',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default Login;
