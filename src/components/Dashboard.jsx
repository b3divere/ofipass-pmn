import React from "react";

const Dashboard = () => {
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

        <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Cerrar Sesión
        </button>
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
    maxWidth: '900px',  // Ajusta el tamaño máximo de la caja
    margin: '0 auto',  // Centra el contenedor en la pantalla
  }
};

export default Dashboard;