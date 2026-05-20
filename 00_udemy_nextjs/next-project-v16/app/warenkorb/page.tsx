//root/app/warenkorb/page.tsx
/**
 * Warenkorbseite im App Router, konsolidiert Store-Daten und leitet in die Checkout-Interaktion ueber.
 * Client Component mit Zustand-Hook, Mount-Guard gegen Hydration-Mismatch, bedingtes Rendering von CheckoutLogik.
 * Input globaler Warenkorbstate und Nutzeraktionen, Logic Summenanzeige sowie Item-Entfernung, Output checkoutfaehige Warenkorbansicht.
 * React Besonderheit Mount-Flag vermeidet SSR-CSR-Differenzen bei clientseitigem Store-Rehydration-Verhalten.
 */

'use client';
import Image from "next/image";
import Link from "next/link";
import {useWarenkorbStore} from "@/store/useWarenkorbStore";
import {useEffect, useState} from "react";
import CheckoutLogik from "@/components/CheckoutLogik";

export default function WarenkorbPage() {

    const {produkte, gesamtbetrag, wAnzahl, loescheProdukt} = useWarenkorbStore();
    const [mounted, setMounted] = useState(false);
    const [kasse, setKasse] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return null;

    if (wAnzahl === 0) {

        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-3xl font-black text-gray-300 uppercase italic">
                    Der Warenkorb ist leer!
                </h2>
                <Link href="/"
                      className="mt-6 bg-red-700 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-800 transition-all active:scale-95">
                    Jetzt Menü ansehen!
                </Link>
            </div>);
    }
    return (

        <div className="max-w-7xl mx-auto py-10 px-4">

            <h1 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter italic">Dein
                Warenkorb</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">


                <div className="lg:col-span-3 overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        <thead>
                        <tr className="border-b border-gray-200 text-gray-400 text-xs uppercase tracking-widest">
                            <th className="py-4 font-semibold">Produkt</th>
                            <th className="py-4 font-semibold">Extras</th>
                            <th className="py-4 font-semibold">Menge</th>
                            <th className="py-4 font-semibold text-right">Betrag</th>
                            <th className="py-4"></th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">

                        {produkte.map((item) => (

                            <tr key={item.warenkorbId} className="group hover:bg-gray-50/50 transition-colors">

                                <td className="py-6">
                                    <div className="flex items-center gap-4">

                                        <div
                                            className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                            <Image src={item.bild} alt={item.name} fill className="object-cover"/>
                                        </div>
                                        <Link href={`/produkte/${item.url}`}
                                              className="font-bold text-gray-800 hover:text-red-700 transition-colors">
                                            {item.name}
                                        </Link>

                                    </div>
                                </td>

                                <td className="py-6 text-sm text-gray-500 italic">
                                    {item.extras.length > 0
                                        ? item.extras.map(e => e.text).join(", ")
                                        : "Keine Extras"}
                                </td>

                                <td className="py-6 font-medium text-gray-700">
                                    {item.menge}x
                                </td>

                                <td className="py-6 font-black text-right text-gray-900">
                                    {(item.preis * item.menge).toFixed(2)}€
                                </td>

                                <td className="py-6 text-right">
                                    <button onClick={() => loescheProdukt(item.warenkorbId)}
                                            className="p-2 text-gray-300 hover:text-red-600 transition-colors">
                                        x
                                    </button>
                                </td>

                            </tr>))}
                        </tbody>
                    </table>
                </div>

                <div className="lg:col-span-1">

                    <div
                        className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 sticky top-24">

                        <h2 className="text-xl font-bold mb-6 text-gray-800">Gesamt</h2>

                        <div className="flex justify-between items-end mb-8">
                            <span className="text-gray-400 font-medium italic">Gesamtbetrag</span>
                            <span className="text-3xl font-black text-red-700 leading-none">
                                {gesamtbetrag.toFixed(2)}€
                            </span>
                        </div>

                        {!kasse ? (
                            <button onClick={() => setKasse(true)}
                                    className="w-full bg-red-700 hover:bg-red-800 text-white font-black py-5 rounded-2xl transition-all shadow-lg uppercase tracking-widest text-sm">
                                Zur Kasse
                            </button>) : (<CheckoutLogik/>)}

                    </div>
                </div>
            </div>
        </div>);
}
