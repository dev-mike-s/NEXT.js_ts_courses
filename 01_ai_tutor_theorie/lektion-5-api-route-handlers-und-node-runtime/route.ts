//root/lektion-5-api-route-handlers-und-node-runtime/route.ts
/*
  Minimaler Route Handler fuer eine Task-API: GET liest die Liste, POST erzeugt einen neuen Eintrag.
  Feature-Historie: route.ts mit GET/POST ist Next.js Route Handler ab 13.2. REST-aehnliche APIs und In-Memory-Demo-Daten sind klassische Lernmuster.
*/

// app/api/tasks/route.ts

// In-Memory-Daten nur fuer Demo. In echten Apps: DB verwenden.
const tasks = [{id: 1, title: "Erste Task"}];

export async function GET() {
  // Response.json erzeugt application/json mit 200 default.
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTask = {
    id: tasks.length + 1,
    // ?? = Nullish Coalescing (nur bei null/undefined fallback)
    title: body.title ?? "Ohne Titel",
  };

  tasks.push(newTask);
  return Response.json(newTask, {status: 201});
}


