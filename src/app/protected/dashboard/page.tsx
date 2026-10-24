import { createClient } from "@/lib/supabase/server";
import "@/styles/dashboard.css";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
  <main className="dashboard">

    <aside className="sidebar">
      <div className="sidebar-logo">
        Mi Empresa
      </div>

      <nav className="sidebar-menu">
        <a href="#">Dashboard</a>
        <a href="#">Clientes</a>
        <a href="#">Proyectos</a>
        <a href="#">Reportes</a>
        <a href="#">Configuración</a>
      </nav>
    </aside>

    <section className="main-content">

      <div className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p>Resumen General</p>
        </div>

        <div className="user-avatar">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="stats-grid">

        <div className="card">
          <h3>Clientes</h3>
          <p className="value">145</p>
        </div>

        <div className="card">
          <h3>Proyectos</h3>
          <p className="value">28</p>
        </div>

        <div className="card">
          <h3>Ingresos</h3>
          <p className="value">$12k</p>
        </div>

        <div className="card">
          <h3>Tareas</h3>
          <p className="value">12</p>
        </div>

      </div>

      <div className="content-grid">

        <div className="card">
          <h2>Actividad Reciente</h2>

          <ul>
            <li>Nuevo cliente registrado</li>
            <li>Proyecto actualizado</li>
            <li>Factura generada</li>
            <li>Reporte descargado</li>
          </ul>
        </div>

        <div className="card">
          <h2>Estado General</h2>
          <p>Sistema operativo correctamente.</p>
        </div>

      </div>

    </section>

  </main>
);
}
