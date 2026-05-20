//root/pages/warenkorb.jsx
/**
 * Warenkorbseite als Checkout-Hub, visualisiert Positionen, Summen und startet den Zahlungsprozess.
 * React Hooks fuer lokalen UI-State, Redux Hooks fuer Warenkorbdaten, PayPal SDK und Router-Navigation nach Bestellabschluss.
 * Input Store-Daten und Nutzeraktionen, Logic Entfernen, Bezahlen und API-POST der Bestellung, Output Checkout-Status und Weiterleitung.
 * Next.js Besonderheit clientseitige Interaktion wird mit serverseitiger API-Route kombiniert, trennt UI-State klar von Persistenz.
 */

import React, {useEffect, useState} from 'react';
import {Table, CloseButton, Button, Card} from 'react-bootstrap';
import Image from 'next/image';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import {loescheProdukt, leeren} from '../redux/warenkorbSlice';
import {PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import axios from "axios";
import {useRouter} from "next/router";
import {toast} from 'react-toastify';

export default function Warenkorb() {

    const clientID = "AZe6EJ9dItowmT0fn0kYbXSsQkFCcnHOKCXuOTvMEl1guVi0MLVAsXFTXdcyIuHJUei2Ya5WzrcKnDIl";
    const warenkorb = useSelector((state) => state.warenkorb);
    const [kasse, setKasse] = useState(false);
    const amount = warenkorb.gesamtbetrag.toFixed(2);

    const currency = "EUR";
    const style = {
        "layout": "vertical",
        "height": 30
    };

    const router = useRouter();
    const dispatch = useDispatch();
    const entfernen = (produkt) => {
        dispatch(loescheProdukt(produkt));
        toast.error(produkt.name + " wurde entfernt!", {
            position: "top-center",
            autoClose: 3000
        });
    };
    const erstelleBestellung = async (data) => {
        try {
            const res = await axios.post("/api/bestellungen", data);
            if (res.status === 201) {
                dispatch(leeren());
                router.push(`/bestellungen/${res.data._id}`);
            }
        } catch (error) {
            console.error("Fehler beim Erstellen der Bestellung:", error);
        }
    };
    const ButtonWrapper = ({currency, showSpinner}) => {
        const [{options, isPending}, dispatch] = usePayPalScriptReducer();
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
        return (
            <>
                {(showSpinner && isPending) && <div className="spinner"/>}
                <PayPalButtons style={style} disabled={false} forceReRender={[amount, currency, style]}
                               fundingSource={undefined} createOrder={(data, actions) => {

                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    }
                                }
                            ]
                        })
                        .then((orderId) => {
                            return orderId;
                        });
                }} onApprove={function (data, actions) {

                    return actions.order.capture().then(function (details) {

                        console.log(details.purchase_units[0].shipping);
                        const kunde = details.purchase_units[0].shipping;
                        console.log(kunde);

                        erstelleBestellung({
                            kunde: kunde.name.full_name,
                            adresse: kunde.address.address_line_1 + ", " + kunde.address.admin_area_2,
                            betrag: warenkorb.gesamtbetrag,
                            status: 0,
                            zahlung: 1,
                            produkte: warenkorb.produkte.map((produkt) => ({
                                name: produkt.name,
                                menge: produkt.menge,
                                extras: produkt.extras.map(extra => (extra.text))
                            })),
                        });
                    });
                }}/>
            </>);
    };
    return (
        <div>
            {warenkorb.wAnzahl === 0 ? (<h2>Der Warenkorb ist leer!</h2>) : (
                <div>
                    <h1>Warenkorb</h1>
                    <div className="row mt-4">
                        <div className="col-9">
                            <Table hover responsive>
                                <thead>
                                <tr>
                                    <th>Bild</th>
                                    <th>Name</th>
                                    <th>Extras</th>
                                    <th>Menge</th>
                                    <th>Betrag</th>
                                    <th><CloseButton disabled/></th>
                                </tr>
                                </thead>
                                <tbody>
                                {warenkorb.produkte.map((produkt) => (<tr key={produkt._id}>
                                    <td>
                                        <Image src={produkt.bild} alt={produkt.name} width={50} height={50}/>
                                    </td>
                                    <td>
                                        <Link href={`/produkte/${produkt.url}`}>
                                            <a className="text-danger">
                                                {produkt.name}
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        {produkt.extras.map(extra => (<span key={extra._id}>{extra.text}</span>))}
                                    </td>
                                    <td>{produkt.menge}</td>
                                    <td>{(produkt.preis * produkt.menge).toFixed(2)}€</td>
                                    <td>
                                        <Button className="button-sm" onClick={() => entfernen(produkt)}>
                                            x
                                        </Button>
                                    </td>
                                </tr>))}
                                </tbody>

                            </Table>
                        </div>
                        <div className="col-3 p-2">
                            <div className="shadow">
                                <Card>
                                    <Card.Header as="h5">Gesamt</Card.Header>
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            {warenkorb.gesamtbetrag.toFixed(2)}€
                                        </Card.Title>
                                        {kasse ? (<PayPalScriptProvider options={{
                                            "client-id": clientID,
                                            components: "buttons",
                                            currency: "EUR",
                                            "disable-funding": "sofort"
                                        }}>
                                            <ButtonWrapper currency={currency} showSpinner={false}/>
                                        </PayPalScriptProvider>) : (
                                            <Button variant="primary" onClick={() => setKasse(true)}>Zur
                                                Kasse</Button>)}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>);
}
