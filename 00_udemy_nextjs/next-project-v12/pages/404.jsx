//root/pages/404.jsx
/**
 * Fehlerseite fuer nicht aufloesbare Routen im Pages Router, stellt kontrollierte Fallback-Navigation bereit.
 * Funktionale React-Komponente, optional useRouter und useEffect fuer Redirect-Strategie, kein Datenfetching notwendig.
 * Input fehlgeschlagene Route-Aufloesung, Logic Anzeige oder Weiterleitung, Output definierte 404-Userfuehrung.
 * Next.js Besonderheit pages/404 wird als spezielle Error-Route behandelt und statisch bereitgestellt.
 */

import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function Fehler() {

    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    });

    return null;
}
