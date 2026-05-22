//root/lektion-11-bff-und-api-orchestrierung/bff-route.ts
// @ts-nocheck

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
