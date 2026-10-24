import { createClient } from "@/lib/server";
import LogoutButton from "@/components/LogoutButton";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Bienvenido</h1>

      <p>{user?.email}</p>

      <LogoutButton />
    </div>
  );
}