//root/components/CheckoutLogik.tsx
/**
 * Checkout-Orchestrierung zwischen Warenkorb, PayPal und Bestell-API, finalisiert Zahl- und Versanddaten.
 * Client Component, PayPal SDK Buttons, Next Navigation Hook und HTTP-Client fuer Bestellerstellung.
 * Input Warenkorbstate und PayPal-Approve-Daten, Logic Mapping in Bestellpayload und API-POST, Output Redirect zur Bestellstatusseite.
 * Next.js Besonderheit Zahlungsabwicklung laeuft clientseitig, Persistenz erfolgt serverseitig ueber Route Handler oder API Route.
 */

'use client';

import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useWarenkorbStore} from "@/store/useWarenkorbStore";

export default function CheckoutLogik() {

    const {gesamtbetrag, leeren, produkte} = useWarenkorbStore();
    const router = useRouter();

    const erstelleBestellung = async (data: any) => {
        try {
            const res = await axios.post("/api/bestellungen", data);
            if (res.status === 201) {
                leeren();
                const bestellungsId = res.data._id;
                if (bestellungsId) {
                    router.push(`/bestellungen/${bestellungsId}`);
                }
            }
        } catch (error) {
            console.error("Fehler beim Erstellen der Bestellung:", error);
        }
    };

    return (<PayPalScriptProvider options={{
        clientId: "AZe6EJ9dItowmT0fn0kYbXSsQkFCcnHOKCXuOTvMEl1guVi0MLVAsXFTXdcyIuHJUei2Ya5WzrcKnDIl",
        currency: "EUR"
    }}>
        <PayPalButtons style={{layout: "vertical", height: 45}} createOrder={(data, actions) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [{
                    amount: {
                        currency_code: "EUR",
                        value: gesamtbetrag.toFixed(2)
                    }
                }]
            });
        }} onApprove={(data, actions) => {
            return actions.order!.capture().then((details: any) => {
                const kunde = details.purchase_units[0].shipping;
                erstelleBestellung({
                    kunde: kunde.name.full_name,
                    adresse: `${kunde.address.address_line_1}, ${kunde.address.admin_area_1}`,
                    betrag: gesamtbetrag,
                    status: 0,
                    zahlung: 1,
                    produkte: produkte.map(p => ({
                        name: p.name,
                        menge: p.menge,
                        extras: p.extras.map((e: any) => e.text)
                    }))
                });
            });
        }}/>
    </PayPalScriptProvider>);
}
