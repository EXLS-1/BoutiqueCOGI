import { redirect } from "next/navigation";

export function requireAdmin(session: any) {
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }
}

export function requireAuth(session: any) {
  if (!session) redirect("/login");
}