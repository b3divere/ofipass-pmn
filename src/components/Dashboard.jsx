import React from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleReportes = () => {
    navigate('/reportes');
  };

  const handlePerfil = () => {
    navigate('/perfil');
  };

  return (
    <div className="min-h-screen bg-[#e6f3fb] p-6">
      <div style={styles.card}>
        <h1 className="text-2xl font-semibold text-center mb-6">Panel de Control - OfiPass</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border-2 border-red-500 rounded-md bg-white shadow">
            <h3 className="font-bold mb-2">Accesos Hoy</h3>
            <p className="text-xl text-red-600">128</p>
          </div>

          <div className="p-4 border-2 border-red-500 rounded-md bg-white shadow">
            <h3 className="font-bold mb-2">Usuarios Activos</h3>
            <p className="text-xl text-red-600">57</p>
          </div>

          <div className="p-4 border-2 border-red-500 rounded-md bg-white shadow">
            <h3 className="font-bold mb-2">Alertas</h3>
            <p className="text-xl text-red-600">2</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={styles.button} onClick={handleReportes} className="bg-blue-500 hover:bg-blue-600">
            Ver Reportes
          </button>
          <button style={styles.button} onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
            Cerrar Sesión
          </button>
          <button style={styles.button} onClick={handlePerfil} className="bg-red-500 hover:bg-red-600">
            Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
  },
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

export default Dashboard;