import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>OfiPass - Inicio de Sesión</h1>
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}