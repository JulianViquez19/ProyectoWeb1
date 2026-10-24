import Link from "next/link";
import "@/styles/home.css";

export default function Home() {
  return (
    <main className="home">

      <section className="left-panel">
        <div className="overlay">

          <div className="brand">

            <span className="tag">
              Plataforma aprendizaje
            </span>

            <h1>
              Mejore su conocimiento sobre la prueba teórica de manejo
            </h1>

            <p>
              Información, prácticas y recursos para aprobar la prueba teórica de manejo
            </p>

          </div>

        </div>
      </section>

      <section className="right-panel">

        <div className="welcome-card">

          <h2>¡Le damos la bienvenida!</h2>

          <p>
            Inicie sesión y acceda a los recursos disponibles
          </p>

          <Link
            href="/login"
            className="login-btn"
          >
            Iniciar sesión
          </Link>

        </div>

      </section>

    </main>
  );
}