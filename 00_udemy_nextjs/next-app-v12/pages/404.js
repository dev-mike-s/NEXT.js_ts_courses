//root/pages/404.js
/**
 * Fehlerseite fuer nicht aufloesbare Routen im Pages Router, stellt kontrollierte Fallback-Navigation bereit.
 * Funktionale React-Komponente, optional useRouter und useEffect fuer Redirect-Strategie, kein Datenfetching notwendig.
 * Input fehlgeschlagene Route-Aufloesung, Logic Anzeige oder Weiterleitung, Output definierte 404-Userfuehrung.
 * Next.js Besonderheit pages/404 wird als spezielle Error-Route behandelt und statisch bereitgestellt.
 */

import React from 'react';

export default function Fehlerseite() {

    return (
        <div>
            <h1>
                Seite nicht gefunden.
            </h1>
        </div>);
}
