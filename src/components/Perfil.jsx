import React from "react";
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const navigate = useNavigate();

  const handleReportes = () => {
    navigate('/reportes');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#e6f3fb] p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Perfil de Usuario</h1>
        <div className="space-y-4">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Correo:</strong> juanperez@example.com</p>
          <p><strong>Rol:</strong> Administrador</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={styles.button} onClick={handleDashboard} className="bg-red-500 hover:bg-red-600">
            Dashboard
          </button>
          <button style={styles.button} onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
            Cerrar Sesión
          </button>
          <button style={styles.button} onClick={handleReportes} className="bg-blue-500 hover:bg-blue-600">
            Ver Reportes
          </button>
        </div>
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

export default Perfil;