//root/lektion-5-api-route-handlers-und-node-runtime/route-validated.ts
// @ts-nocheck

// app/api/users/route.ts

// Node Runtime explizit, wichtig fuer viele DB- und Node-APIs.
export const runtime = "nodejs";

type CreateUserBody = {
  email?: string;
  name?: string;
};

function isValidEmail(email: string) {
  // Simple Regex nur als Lernbeispiel.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as CreateUserBody;

  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? "").trim();

  if (!email || !name || !isValidEmail(email)) {
    return Response.json({error: "Ungueltige Eingaben"}, {status: 400});
  }

  return Response.json({id: "u_123", email, name}, {status: 201});
}
