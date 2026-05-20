//root/pages/benutzer/[id].js
/**
 * Dynamische Benutzerdetailseite, zeigt ein einzelnes Profil aus externer API als statisch vorgerenderte Seite.
 * Pages-Router SSG mit getStaticPaths und getStaticProps, fetch-Aufrufe zu externem JSON-Endpunkt.
 * Input Benutzer-ID aus Route und API-Responses, Logic Pfadgenerierung plus Detailfetch, Output gerenderter Benutzername pro statischer Seite.
 * Next.js Besonderheit Dynamic Segment [id] wird bei Build erzeugt, fallback steuert Verhalten fuer unbekannte Pfade.
 */

import React from 'react';

export default function index({users}) {

    return (
        <div>
            <h1>Benutzer</h1>
                <h2>{users.username}</h2>
        </div>);
}
export async function getStaticProps(context) {

    const antwort = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const users = await antwort.json();

    return {
        props: {
            users
        }
    };
}
export async function getStaticPaths() {

    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await antwort.json();
    const ids = await users.map((user) => user.id);

    const paths = ids.map(id => {
        return { params: {id: id.toString()} };
    });
    return {
        paths,
        fallback: false
    };
}
