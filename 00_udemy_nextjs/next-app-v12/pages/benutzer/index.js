//root/pages/benutzer/index.js
/**
 * Benutzeruebersichtsseite, rendert externe Nutzerdaten als statisch vorgerenderte Liste fuer Lernzwecke.
 * Pages-Router SSG mit getStaticProps, fetch API, funktionale Listenrenderung in React.
 * Input API-Response mit User-Array, Logic JSON-Transformation und map-Ausgabe, Output HTML-Liste der Benutzernamen.
 * Next.js Besonderheit Build-time Datenbeschaffung reduziert Laufzeitlast und liefert sofort statisches Initial-HTML.
 */

import React from 'react';

export default function index({users}) {

    return (
        <div>
            <h1>Liste der Benutzer</h1>

            {users.map((user) => [
                <h2 key={user.username}>{user.username}</h2>
            ])}

        </div>);
}
export async function getStaticProps() {

    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await antwort.json();

    return {
        props: {
            users
        },
    };
}
