//root/pages/autos/[[...params]].js
/**
 * Route-Komponente fuer parameterisierte Seiteninhalte, bildet URL-Segmente auf konkrete UI-Aussagen ab.
 * Dynamic Routing mit useRouter oder Segment-Props, bedingtes Rendering anhand Segmentanzahl und Parametern.
 * Input URL-Segmente und optional Query-Werte, Logic Auswertung der Parameter, Output routeabhaengiger Seitentext oder Detailansicht.
 * Next.js Besonderheit Dynamic, Catch-all und Optional Catch-all Segmente ([id], [...slug], [[...slug]]) steuern Route-Matching.
 */

import {useRouter} from 'next/router';

export default function ID() {

    const router = useRouter();
    const {params = []} = router.query;

    if (params.length === 2) {
        return (
            <div>
                <h1> Alle {params[0]} für unter {params[1]} Euro </h1>
            </div>);
    }
    else if (params.length === 1) {
        return <h1> Alle {params[0]} </h1>;
    }
    return <h1> Autos </h1>;
}
