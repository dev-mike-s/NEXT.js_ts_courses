//root/app/backend/AdminTable.tsx
/**
 * Quellcodedatei mit klar abgegrenzter Teilverantwortung innerhalb der Next.js-Anwendung, wartbar ueber modulare Struktur.
 * React- und JavaScript beziehungsweise TypeScript-Konzepte, modulare Imports, funktionale Implementierung und kontrollierte Seiteneffekte.
 * Input aus Props, Route, Store oder Request, Logic in Funktionen und Bedingungen, Output als UI, JSON oder Persistenzoperation.
 * Next.js Besonderheit Integration in App-Router Dateikonvention, Routing- und Rendering-Lebenszyklus.
 */

"use client";
import {useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function AdminTable({initialBestellungen}: {
    initialBestellungen: any[];
}) {

    const [hiddenIds, setHiddenIds] = useState<string[]>([]);
    const [orders, setOrders] = useState(initialBestellungen);
    const statusLabels = ["Eingegangen", "Zubereitung", "Unterwegs", "Ausgeliefert"];

    const nextStatus = async (id: string, currentStatus: number) => {
        if (currentStatus >= 3)
            return;
        const newStatus = currentStatus + 1;
        try {
            const res = await axios.put(`/api/bestellungen/${id}`, {status: newStatus});
            if (res.status === 200) {
                setOrders(orders.map(order => order._id === id ? {...order, status: newStatus} : order));
            }
        } catch (error) {
            console.error("Fehler beim Status-Update:", error);
        }
    };

    const visibleOrders = orders.filter(order => !hiddenIds.includes(order._id));

    return (
        <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse">

                <thead
                    className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100">
                <tr>
                    <th className="px-8 py-5 font-bold">Bestell-Nr.</th>
                    <th className="px-8 py-5 font-bold">Kunde</th>
                    <th className="px-8 py-5 font-bold text-center">Status</th>
                    <th className="px-8 py-5 font-bold text-right">Aktion</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">

                {visibleOrders.map((order) => (<tr key={order._id} className="hover:bg-gray-50/30 transition-colors">

                    <td className="px-8 py-6">
                        <Link href={`/bestellungen/${order._id}`}
                              className="font-mono text-xs text-red-600 font-bold hover:underline decoration-red-300 underline-offset-4 decoration-2 transition-all"
                              title="Details anzeigen">
                            {order._id.substring(0, 8)}...
                        </Link>
                    </td>

                    <td className="px-8 py-6">
                        <div className="font-bold text-gray-800">{order.kunde}</div>
                        <div className="text-xs text-gray-400 italic">{order.adresse}</div>
                    </td>

                    <td className="px-8 py-6 text-center">
                        <button onClick={() => nextStatus(order._id, order.status)} disabled={order.status >= 3}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all
                                        ${order.status >= 3
                                    ? 'bg-green-50 text-green-600 border-green-100 cursor-default'
                                    : 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-600 hover:text-white'}`}>
                            {statusLabels[order.status]}
                        </button>
                    </td>

                    <td className="px-8 py-6 text-right">
                        <button onClick={() => setHiddenIds(prev => [...prev, order._id])}
                                className="text-[10px] font-black uppercase text-gray-300 hover:text-orange-600 transition-all">
                            Archivieren
                        </button>
                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>);
}
