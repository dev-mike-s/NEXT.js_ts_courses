# Compiler-Hinweise temporaer ausschalten (nur Lernphase)

## 1) Datei-lokal (schnell)
```ts
// @ts-nocheck
```

## 2) Build-Checks temporaer lockern
```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
```

Hinweis: fuer produktiven Code spaeter wieder aktivieren, sonst verlierst du wichtige Qualitäts-Signale.
