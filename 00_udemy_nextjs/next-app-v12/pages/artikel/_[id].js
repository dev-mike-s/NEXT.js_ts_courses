//root/pages/artikel/_[id].js
/**
 * Route-Komponente fuer parameterisierte Seiteninhalte, bildet URL-Segmente auf konkrete UI-Aussagen ab.
 * Dynamic Routing mit useRouter oder Segment-Props, bedingtes Rendering anhand Segmentanzahl und Parametern.
 * Input URL-Segmente und optional Query-Werte, Logic Auswertung der Parameter, Output routeabhaengiger Seitentext oder Detailansicht.
 * Next.js Besonderheit Dynamic, Catch-all und Optional Catch-all Segmente ([id], [...slug], [[...slug]]) steuern Route-Matching.
 */

import {useRouter} from 'next/router';

export default function ID() {

    const router = useRouter();
    const id = router.query.id;

    return (
        <div>
            <h1>Die ID lautet {id} </h1>
        </div>);
}
