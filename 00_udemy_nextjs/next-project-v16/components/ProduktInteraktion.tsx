//root/components/ProduktInteraktion.tsx
/**
 * Interaktive Produktdetail-Logik fuer Mengenwahl und Extras, bereitet Warenkorbpositionen fuer Checkout vor.
 * Client Hooks useState, Event-Handler fuer Checkbox und Number-Input, Zustand-Store-Integration und Toast-Feedback.
 * Input Produktobjekt und User-Eingaben, Logic Preisaufschlag sowie Payload-Zusammenbau, Output addProdukt-Dispatch in den Store.
 * React Besonderheit Client Component erforderlich wegen Browser-Events und sofortigem UI-Feedback ohne Server-Roundtrip.
 */

'use client';

import {useState} from "react";
import {useWarenkorbStore} from "@/store/useWarenkorbStore";
import {toast} from "sonner";

export default function ProduktInteraktion({produkt}: {
    produkt: any;
}) {
    const [menge, setMenge] = useState(1);
    const [gewaehlteExtras, setGewaehlteExtras] = useState<any[]>([]);
    const addProdukt = useWarenkorbStore((state) => state.addProdukt);

    const handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>, extra: any) => {
        if (e.target.checked) {
            setGewaehlteExtras([...gewaehlteExtras, extra]);
        } else {
            setGewaehlteExtras(gewaehlteExtras.filter((ex) => ex.text !== extra.text));
        }
    };

    const handleAddToCart = () => {
        const aufpreis = gewaehlteExtras.reduce((sum, e) => sum + e.preis, 0);
        const einzelpreisMitExtras = produkt.preis + aufpreis;
        addProdukt({
            _id: produkt._id,
            name: produkt.name,
            bild: produkt.bild,
            url: produkt.url,
            menge: menge,
            preis: einzelpreisMitExtras,
            extras: gewaehlteExtras,
        });
        toast.success(`${produkt.name} wurde hinzugefÃ¼gt!`);
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
                    {produkt.name}
                </h1>
                <p className="text-gray-500 leading-relaxed">{produkt.beschreibung}</p>
            </div>


            {produkt.extras && produkt.extras.length > 0 && (
                <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                        Extras hinzufügen
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {produkt.extras.map((extra: any) => (<label key={extra.text}
                                                                    className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl cursor-pointer hover:border-red-200 transition-all">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="w-5 h-5 accent-red-600"
                                       onChange={(e) => handleExtraChange(e, extra)}/>
                                <span className="text-sm font-bold text-gray-700">{extra.text}</span>
                            </div>
                            <span className="text-xs font-black text-red-600">+{extra.preis.toFixed(2)}€</span>
                        </label>))}
                    </div>
                </div>)}

            <div className="flex items-center gap-4 mt-4">
                <input type="number" min="1" value={menge} onChange={(e) => setMenge(parseInt(e.target.value))}
                       className="w-20 p-4 bg-gray-100 border-none rounded-2xl font-black text-center focus:ring-2 focus:ring-red-600 outline-none"/>
                <button onClick={handleAddToCart}
                        className="flex-grow bg-red-700 hover:bg-red-800 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-700/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                    In den Warenkorb
                </button>
            </div>
        </div>);
}
