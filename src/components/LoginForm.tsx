"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import "@/styles/login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMagicLink = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const supabase = createClient();

    const { error } =
      await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo:
            "http://localhost:3000/auth/callback",
        },
      });

    if (error) {
      console.error(error);
      setMensaje(error.message);
      return;
    }

    setMensaje(
      "Correo enviado correctamente. Revise su bandeja de entrada para continuar."
    );
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Iniciar Sesión</h1>

        <form onSubmit={enviarMagicLink}>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Enviar enlace de acceso
          </button>

          <Link
            href="/"
            className="secondary-button"
          >
            Regresar a la página principal
          </Link>

        </form>

       {mensaje && (
        <div className="success-message">
          <p>{mensaje}</p>
        </div>
      )}

      </div>
    </div>
  );
}