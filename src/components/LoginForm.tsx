import "@/styles/login.css";

export default function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Iniciar Sesión</h1>

        <form>
          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <button type="submit">
            Enviar enlace de acceso
          </button>
        </form>
      </div>
    </div>
  );
}