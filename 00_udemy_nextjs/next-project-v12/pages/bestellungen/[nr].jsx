//root/pages/bestellungen/[nr].jsx
/**
 * Dynamische Bestellstatusseite, rendert Details einer konkreten Bestellung anhand der Routenparameter.
 * Dynamic Route Segment, useRouter fuer Param- und Fallback-Status, SSR-Datenladen via getServerSideProps.
 * Input Bestellnummer aus URL, Logic Backend-Abfrage und Statusmapping in lesbare Texte, Output detailierte Status- und Positionstabellen.
 * Next.js Besonderheit Dynamic Pages Router Route [nr] koppelt URL direkt an Serverdaten, inklusive Fallback- und Fehlerpfade.
 */

import React from 'react';
import {Table, Spinner, Button, Card} from 'react-bootstrap';
import {useRouter} from 'next/router';
import axios from "axios";

export default function Bestellung( {bestellung} ) {

    const router = useRouter();
    const {nr} = router.query;

    if (!bestellung) {
        return (<div className="container text-center mt-5">
                <h2>Bestellung nicht gefunden</h2>
                <Button onClick={() => router.push('/')}>Zur Karte</Button>
            </div>);
    }

    if (router.isFallback || !nr) {
        return <Spinner animation="border"/>;
    }

    let status;
    switch (bestellung.status) {
        case 0:
            status = "Eingegangen";
            break;
        case 1:
            status = "Zubereitung";
            break;
        case 2:
            status = "Unterwegs";
            break;
        case 3:
            status = "Ausgeliefert";
            break;
    }

    if (nr !== bestellung._id) {
        return (<div>
                <h2>Bestellnummer {nr} nicht vorhanden</h2>
                <Button variant="primary" onClick={() => router.push('/')}>Zur Karte</Button>
            </div>);
    }
    else {
        return (<div>
                <h1>Bestellstatus</h1>
                <div className="row mt-4">
                    <div className="col-9">
                        <Table hover responsive>
                            <thead>
                            <tr>
                                <th>Bestell Nr.</th>
                                <th>Kunde</th>
                                <th>Adresse</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{nr}</td>
                                <td>{bestellung.kunde}</td>
                                <td>{bestellung.adresse}</td>
                                <td>
                                    <span>{status}</span>
                                    {bestellung.status < 3 ? (<Spinner animation="border" variant="success" size="sm"/>) : (<span>€</span>)}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Table hover responsive>
                            <thead>
                            <tr>
                                <th>Produktname</th>
                                <th>Extras</th>
                                <th>Menge</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bestellung.produkte.map((produkt) => <tr key={produkt._id}>
                                    <td>{produkt.name}</td>
                                    <td>
                                        {produkt.extras.map((extra) => (<span key={extra._id}>{extra}</span>))}</td>
                                    <td>{produkt.menge}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-3 p-2">
                        <div className="shadow">
                            <Card>
                                <Card.Header as="h5">Gesamt</Card.Header>
                                <Card.Body className="text-center">
                                    <Card.Title>
                                        {bestellung.betrag.toFixed(2)} €
                                    </Card.Title>

                                    {bestellung.zahlung === 0 ? (<Button variant="danger disabled">offen</Button>) : (<Button variant="success disabled">bezahlt</Button>)}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export async function getServerSideProps( {params} ) {

    try {
        const res = await axios.get(`http://localhost:3000/api/bestellungen/${params.nr}`);
        return {
            props: {
                bestellung: res.data
            },
        };
    }
    catch (error) {
        console.error("Fehler beim Laden der Bestellung:", error.message);
        return {
            props: {
                bestellung: null
            },
        };
    }
}
