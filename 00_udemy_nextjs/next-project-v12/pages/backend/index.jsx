//root/pages/backend/index.jsx
/**
 * Administrationsseite fuer Bestellmanagement, zeigt Bestellungen tabellarisch und erlaubt Status- sowie Loeschaktionen.
 * SSR mit getServerSideProps, Cookie-Pruefung fuer Zugriffsschutz, clientseitige API-Aufrufe fuer Mutationen und Reload.
 * Input Cookie-Token plus Bestellliste aus API, Logic Zugriffskontrolle und Statusfortschreibung, Output aktualisierte Admin-Ansicht.
 * Next.js Besonderheit Pages-SSR kann direkt Redirect-Objekte zur Laufzeit liefern, Dynamic Links zeigen auf Detailrouten.
 */

import React from 'react';
import {Table, Button, CloseButton} from 'react-bootstrap';
import {useRouter} from 'next/router';
import axios from "axios";
import Link from 'next/link';

export default function AdminBackend({bestellungen}) {

    const router = useRouter();
    const status = ["Eingegangen", "Zubereitung", "Unterwegs", "Ausgeliefert"];

    const statusUpdate = async (id, aktuellerStatus) => {
        try {
            if (aktuellerStatus <= 2) {
                await axios.put(`http://localhost:3000/api/bestellungen/` + id, {status: aktuellerStatus + 1});
                router.reload();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    const bestellungEntfernen = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/bestellungen/` + id);
            router.reload();
        }
        catch (e) {
            console.log(e);
        }
    };
    if (!bestellungen || !Array.isArray(bestellungen)) {
        return <div className="container mt-5"><h1>Keine Bestellungen gefunden.</h1></div>;
    }
    return (
        <div className="container mt-4">
            <h1>Admin Backend</h1>
            <div className="row mt-4">
                <div className="col-12">
                    <Table hover responsive striped bordered>
                        <thead>
                        <tr>
                            <th>Bestell Nr.</th>
                            <th>Kunde</th>
                            <th>Adresse</th>
                            <th>Status</th>
                            <th><CloseButton disabled/></th>
                        </tr>
                        </thead>
                        <tbody>
                        {bestellungen.map((bestellung) => (<tr key={bestellung._id}>

                                <td>
                                    <Link href={`/bestellungen/${bestellung._id}`}>
                                        <a className="text-danger">
                                            {bestellung._id}
                                        </a>
                                    </Link>
                                </td>
                                <td>{bestellung.kunde}</td>
                                <td>{bestellung.adresse}</td>
                                <td>
                                    <Button onClick={() => statusUpdate(bestellung._id, bestellung.status)}>
                                        {status[bestellung.status]}
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => bestellungEntfernen(bestellung._id)}>
                                        x
                                    </Button>
                                </td>
                            </tr>))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>);
}

export async function getServerSideProps(ctx) {

    const meinCookie = ctx.req?.cookies || "";

    if (meinCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/backend/login",
                permanent: false
            }
        };
    }
    try {
        const res = await axios.get(`http://localhost:3000/api/bestellungen`);
        return {
            props: {
                bestellungen: res.data || []
            },
        };
    }
    catch (error) {
        console.error("Fehler beim Laden des Admin Backends:", error.message);
        return {
            props: {
                bestellungen: []
            },
        };
    }
}
