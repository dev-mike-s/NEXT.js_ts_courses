//root/next.config.js
/**
 * Projektweite Next.js-Konfiguration, zentrale Steuerung von Build-, Runtime- und Diagnoseverhalten.
 * Typed NextConfig-Objekt, Module-Export beziehungsweise Default-Export, statische Optionen ohne React-Hooks.
 * Input Konfigurationswerte im Objekt, Logic durch Next-Ladeprozess beim Start, Output wirksame Framework-Defaults.
 * Next.js Besonderheit Datei wird vor Routing und Rendering geladen, gilt global fuer Pages Router und App Router.
 */

module.export = {
    reactStrictMode: true,
};
