import { sendMagicLink } from "@/services/authService";

export function useAuth() {

  const requestMagicLink = async (
    email: string
  ) => {

    try {

      await sendMagicLink(email);

      alert(
        "Se ha enviado un enlace de acceso a tu correo."
      );

    } catch (error) {

      console.error(error);

    }
  };

  return {
    requestMagicLink,
  };
}