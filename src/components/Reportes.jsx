import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reportes = () => {
  const navigate = useNavigate();
  
    const handleDashboard = () => {
      navigate('/dashboard');
    };

    const handleLogout = () => {
      navigate('/');
    };

    const handlePerfil = () => {
      navigate('/perfil');
    };
  
    

  return (
    <div className="min-h-screen bg-[#e6f3fb] p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-semibold text-center mb-6">Reportes de Actividad</h1>
        <ul className="list-disc pl-6">
          <li>128 accesos registrados hoy</li>
          <li>57 usuarios activos</li>
          <li>2 alertas de seguridad recientes</li>
          <li>Tiempo promedio de acceso: 3m 20s</li>
        </ul>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={styles.button} onClick={handleDashboard} className="bg-red-500 hover:bg-red-600">
            Dashboard
          </button>
          <button style={styles.button} onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
            Cerrar Sesión
          </button>
          <button style={styles.button} onClick={handlePerfil} className="bg-blue-500 hover:bg-blue-600">
            Perfil
          </button>
        </div>
    </div>
  );
};

const styles = {
  button: {
    width: 'auto',
    minWidth: '120px',  // Ancho mínimo
    padding: '8px 16px',
    margin: '5px',      // Separación entre botones
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'inline-block', // Para que queden lado a lado
    textAlign: 'center'
  }  
};

export default Reportes;