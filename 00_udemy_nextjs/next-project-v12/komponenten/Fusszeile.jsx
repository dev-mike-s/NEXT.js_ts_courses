//root/komponenten/Fusszeile.jsx
/**
 * Fusszeilen-Komponente mit Kontakt- und Serviceinformationen, stabiler Abschlussbereich fuer jede Seite.
 * Statische funktionale React-Komponente, Utility-CSS-Klassen, keine lokalen Hooks oder Seiteneffekte.
 * Input feste Textinhalte, Logic reine Darstellung, Output konsistente Footer-Information im globalen Layout.
 * React Besonderheit presentational Component ohne State reduziert Re-Render-Komplexitaet in der Seitenhuelle.
 */

import React from 'react';

export default function Fusszeile() {

    return (
        <div className="d-flex justify-content-center fixed-bottom text-secondary bg-light">
            <h6>🥗 Liefermax  |  📞 0176 878 42030  |  ⏳ Mo-So: 10:00-22:00</h6>
        </div>);
}