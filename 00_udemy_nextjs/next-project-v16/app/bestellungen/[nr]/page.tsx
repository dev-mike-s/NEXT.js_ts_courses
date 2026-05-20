//root/app/bestellungen/[nr]/page.tsx
/**
 * Dynamische Bestellstatusseite im App Router, stellt Status und Positionen fuer eine konkrete Bestellung dar.
 * Server Component, Param-Aufloesung via async params, DB-Fetching und notFound-Handling aus next/navigation.
 * Input Route-Parameter nr, Logic Dokumentabfrage und Statusmapping, Output strukturierte Bestell- und Zahlungsansicht.
 * Next.js Besonderheit Dynamic Segment [nr] wird direkt als Promise-params uebergeben, notFound erzeugt frameworkkonformes 404 Rendering.
 */

import {notFound} from 'next/navigation';
import dbConnect from "@/utils/mongodb";
import Bestellung from "@/models/Bestellung";

async function getBestellung(nr: string) {

    await dbConnect();
    const res = await Bestellung.findById(nr).lean();
    if (!res)
        return null;
    return JSON.parse(JSON.stringify(res));
}

export default async function BestellungPage({params}: {
    params: Promise<{
        nr: string;
    }>;
}) {
    const {nr} = await params;
    const bestellung = await getBestellung(nr);
    if (!bestellung)
        notFound();

    const statusTexte = ["Eingegangen", "Zubereitung", "Unterwegs", "Ausgeliefert"];

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-black mb-10 italic uppercase tracking-tighter">
                Bestell<span className="text-red-600">status</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">


                <div className="lg:col-span-3 space-y-8">


                    <div
                        className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-5 font-bold">Kunde</th>
                                    <th className="px-8 py-5 font-bold">Adresse</th>
                                    <th className="px-8 py-5 font-bold text-right">Status</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                <tr className="text-gray-700">
                                    <td className="px-8 py-6 font-bold text-lg">{bestellung.kunde}</td>
                                    <td className="px-8 py-6 text-gray-500 leading-tight">{bestellung.adresse}</td>
                                    <td className="px-8 py-6">
                                        <div
                                            className="flex items-center gap-3 bg-green-50 text-green-700 px-5 py-2.5 rounded-full w-fit border border-green-100 ml-auto">
                                                <span className="text-xs font-black uppercase tracking-widest">
                                                    {statusTexte[bestellung.status]}
                                                </span>
                                            {bestellung.status < 3 && (<div
                                                className="w-3 h-3 border-2 border-green-700 border-t-transparent rounded-full animate-spin"></div>)}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">

                        <div className="p-8 border-b border-gray-50">
                            <h2 className="text-xl font-black uppercase italic tracking-tight">Bestellte <span
                                className="text-red-600">Posten</span></h2>
                        </div>
                        <div className="overflow-x-auto">

                            <table className="w-full text-left">
                                <thead className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-4 font-bold">Produkt</th>
                                    <th className="px-8 py-4 font-bold">Extras</th>
                                    <th className="px-8 py-4 font-bold text-center">Menge</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">

                                {(bestellung.produkte || []).map((p: any, i: number) => (
                                    <tr key={i} className="hover:bg-gray-50/30 transition-colors">

                                        <td className="px-8 py-5 font-bold text-gray-800">{p.name}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-wrap gap-1">
                                                {p.extras.map((e: string, ei: number) => (<span key={ei}
                                                                                                className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-medium uppercase">
                                                            {e}
                                                        </span>))}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-center font-mono font-bold text-gray-400">
                                            x{p.menge}
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 sticky top-10">
                    <div className="bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl text-white">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Abrechnung</h2>

                        <div className="mb-2 text-gray-400 text-xs italic">ID: {nr}</div>

                        <div className="flex justify-between items-end mb-10">
                            <span className="text-gray-400 font-medium">Gesamt</span>
                            <span className="text-4xl font-black italic tracking-tighter">
                                {bestellung.betrag.toFixed(2)} €
                            </span>
                        </div>

                        <div className={`w-full text-center py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-2 transition-all shadow-lg
                            ${bestellung.zahlung === 1
                            ? 'bg-green-500/10 border-green-500 text-green-500 shadow-green-500/20'
                            : 'bg-red-500/10 border-red-500 text-red-500 shadow-red-500/20'}`}>
                            {bestellung.zahlung === 1 ? 'Zahlung Erhalten' : 'Zahlung Ausstehend'}
                        </div>
                    </div>
                </div>

            </div>
        </div>);
}
