//root/komponenten/Navigation.jsx
/**
 * Navigationskomponente der Anwendung, verknuepft Kernrouten und visualisiert Warenkorb-Status im Header.
 * Serverseitige Presentational Component ohne lokale Hooks, Next Link und optional Next Image fuer Routing und Assets.
 * Input Store- oder Prop-Werte fuer Badge und Ziele, Logic bedingtes Rendering von Navigationszustand, Output klickbare Hauptnavigation.
 * Next.js Besonderheit Link liefert clientseitige Navigation, in Pages Router teils mit a-Child, im App Router direkt als Komponente.
 */

import Link from 'next/link';
import Image from 'next/image';
import {Badge} from 'react-bootstrap';
import {useSelector} from 'react-redux';

export default function Navigation() {

    const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl);

    return (
        <div className="shadow sticky-top p-2 mb-2 bg-danger">

            <div className="d-flex justify-content-between align-items-center">

                <Link href="/">
                    <a>
                        <Image src={'/bilder/logo.png'} alt='logo' width={180} height={75}/>
                    </a>
                </Link>

                <Link href="/warenkorb">
                    <a>{wAnzahl > 0 ? (
                        <>
                            <Image src={'/bilder/warenkorb.png'} alt='logo' width={30} height={30}/>
                            <Badge pill bg="success" style={{position: "absolute", top: "25px", right: "25px"}}>
                                {wAnzahl}
                            </Badge>
                        </>
                    ) : (<Image src={'/bilder/warenkorb.png'} alt='logo' width={30} height={30}/>)}
                    </a>
                </Link>

            </div>
        </div>);
}
