//root/app/produkte/[url]/page.tsx
/**
 * Dynamische Produktdetailseite im App Router, kombiniert serverseitigen Produktfetch mit clientseitiger Warenkorbinteraktion.
 * Server Component fuer Datenzugriff, notFound-Steuerung, Delegation der Events an separate Client Component.
 * Input URL-Slug und Datenbankabfrage, Logic Validierung des Ergebnisses und Datenserialisierung, Output Detail-UI plus Interaktionsmodul.
 * Next.js Besonderheit Segment [url] nutzt dateisystembasiertes Dynamic Routing, Server und Client Components werden bewusst getrennt.
 */

import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import dbConnect from '@/utils/mongodb';
import Produkt from '@/models/Produkt';
import ProduktInteraktion from '@/components/ProduktInteraktion';

export default async function ProduktSeite({params}: {
    params: Promise<{
        url: string;
    }>;
}) {
    await dbConnect();
    const {url} = await params;
    const res = await Produkt.findOne({url}).lean();

    if (!res) {
        console.error("[v16][Page] Produkt nicht gefunden:", url);
        notFound();
    }

    const produkt = JSON.parse(JSON.stringify(res));

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="text-gray-500
                                      hover:text-red-700
                                      transition-colors
                                      mb-6
                                      inline-block">
                Zurück zur Übersicht
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">

                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={produkt.bild} alt={produkt.name} fill sizes="(max-width: 768px) 100vw, 50vw"
                           className="object-cover" priority/>
                </div>

                <ProduktInteraktion produkt={produkt}/>

            </div>
        </div>);
}
