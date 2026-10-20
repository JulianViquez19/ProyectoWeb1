export async function sendMagicLink(
  email: string
) {

  const response = await fetch(
    "/api/auth/magic-link",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );

  return response.json();
}