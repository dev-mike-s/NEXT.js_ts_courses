//root/lektion-11-bff-und-api-orchestrierung/bff-route.ts
/*
  Backend-for-Frontend: Das Frontend bekommt ein stabiles DTO, statt mehrere externe APIs und deren Rohformate kennen zu muessen.
  Feature-Historie: App-Router Route Handlers kamen mit Next.js 13.2; der App Router wurde mit Next.js 13.4 produktionsreif. BFF selbst ist ein aelteres Architekturpattern.
*/

// app/api/dashboard/route.ts

export const runtime = "nodejs";

type WeatherApi = {tempC: number};
type NewsApi = {headlines: string[]};

export async function GET() {
  // BFF-Orchestrierung: mehrere Quellen parallel laden.
  const [weatherRes, newsRes] = await Promise.all([
    fetch("https://example.com/weather"),
    fetch("https://example.com/news"),
  ]);

  if (!weatherRes.ok || !newsRes.ok) {
    return Response.json({ok: false, error: "Upstream Fehler"}, {status: 502});
  }

  const weather = (await weatherRes.json()) as WeatherApi;
  const news = (await newsRes.json()) as NewsApi;

  return Response.json({
    ok: true,
    data: {
      tempC: weather.tempC,
      headlines: news.headlines,
    },
  });
}


