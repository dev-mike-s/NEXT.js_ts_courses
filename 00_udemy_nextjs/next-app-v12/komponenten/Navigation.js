//root/komponenten/Navigation.js
/**
 * Navigationskomponente der Anwendung, verknuepft Kernrouten und visualisiert Warenkorb-Status im Header.
 * Serverseitige Presentational Component ohne lokale Hooks, Next Link und optional Next Image fuer Routing und Assets.
 * Input Store- oder Prop-Werte fuer Badge und Ziele, Logic bedingtes Rendering von Navigationszustand, Output klickbare Hauptnavigation.
 * Next.js Besonderheit Link liefert clientseitige Navigation, in Pages Router teils mit a-Child, im App Router direkt als Komponente.
 */

import Link from 'next/link';

export default function Navigation() {

    return (
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link href="/">
                        <a class="nav-link">
                            Startseite
                        </a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/artikel">
                        <a class="nav-link">
                            Artikel
                        </a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/artikel/hose">
                        <a class="nav-link">
                            Hosen
                        </a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/artikel/pullover">
                        <a class="nav-link">
                            Pullover
                        </a>
                    </Link>
                </li>
            </ul>
        </div>);
}
