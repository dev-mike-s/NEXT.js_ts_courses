//root/app/backend/page.tsx
/**
 * Serverseitige Admin-Uebersichtsseite, laedt Bestellungen und delegiert Interaktion an untergeordnete Client-Komponenten.
 * Server Component mit direktem DB-Zugriff, Lean-Serialisierung, Komposition mit interaktivem AdminTable-Clientmodul.
 * Input Datenbankdokumente aus Bestellung-Collection, Logic Sortierung und Serialisierung, Output initiale Bestellliste fuer Admin-UI.
 * Next.js Besonderheit App Router erlaubt Datenzugriff direkt in der Page ohne getServerSideProps.
 */

import dbConnect from "@/utils/mongodb";
import Bestellung from "@/models/Bestellung";
import AdminTable from "./AdminTable";

export default async function BackendPage() {

    await dbConnect();
    const res = await Bestellung.find({}).sort({createdAt: -1}).lean();
    const bestellungen = JSON.parse(JSON.stringify(res));

    return (

        <div className="max-w-7xl mx-auto py-10 px-4">

            <header className="mb-10">
                <h1 className="text-4xl font-black uppercase italic tracking-tighter text-gray-900">
                    Admin <span className="text-red-600">Backend</span>
                </h1>
                <p className="text-gray-500 font-medium">Verwalte hier alle eingegangenen Bestellungen.</p>
            </header>

            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                <AdminTable initialBestellungen={bestellungen}/>
            </div>
        </div>);
}
