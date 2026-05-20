//root/components/Footer.tsx
/**
 * Fusszeilen-Komponente mit Kontakt- und Serviceinformationen, stabiler Abschlussbereich fuer jede Seite.
 * Statische funktionale React-Komponente, Utility-CSS-Klassen, keine lokalen Hooks oder Seiteneffekte.
 * Input feste Textinhalte, Logic reine Darstellung, Output konsistente Footer-Information im globalen Layout.
 * React Besonderheit presentational Component ohne State reduziert Re-Render-Komplexitaet in der Seitenhuelle.
 */

export default function Footer() {

    return (
        <footer className="w-full py-4 bg-white border-t border-gray-200 text-gray-500 text-sm">
            <div className="flex justify-center gap-4">
                <span>🥗 Liefermax</span>
                <span className="hidden sm:inline">|</span>
                <span>📞 0176 878 42030</span>
                <span className="hidden sm:inline">|</span>
                <span>⏳ Mo-So: 10:00-22:00</span>
            </div>
        </footer>);
}