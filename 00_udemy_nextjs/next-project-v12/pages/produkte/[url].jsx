//root/pages/produkte/[url].jsx
/**
 * Dynamische Produktdetailseite, verbindet Produktanzeige mit konfigurierbarer Warenkorbinteraktion.
 * useState fuer Menge und Extras, Redux-Dispatch fuer Warenkorbupdates, SSR-Datenbezug ueber getServerSideProps.
 * Input URL-Slug und Formularaktionen, Logic Preisanpassung sowie Payload-Erstellung, Output Warenkorbposition und Navigation zum Checkout.
 * Next.js Besonderheit Dynamic Route [url] im Pages Router nutzt serverseitigen Fetch pro Request fuer aktuelle Produktdaten.
 */

import Link from "next/link";
import Image from "next/image";
import {ListGroup, Button} from "react-bootstrap";
import dbConnect from "../../utils/mongodb";
import Produkt from "../../models/Produkt";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProdukte} from "../../redux/warenkorbSlice";
import {v4 as uuidv4} from "uuid";
import {useRouter} from "next/router";

export default function Produktseite({produkt}) {

    const [preis, setPreis] = useState(produkt.preis);
    const [extras, setExtras] = useState([]);
    const [menge, setMenge] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter();

    const addExtra = (e, extra) => {
        const checked = e.target.checked;
        if (checked) {
            setPreis(preis + extra.preis);
            setExtras([...extras, extra]);
        }
        else {
            setPreis(preis - extra.preis);
            setExtras(extras.filter((alleExtras) => alleExtras._id !== extra._id));
        }
    };

    console.log(extras);

    const zumWarenkorb = () => {
        const _id = uuidv4();
        dispatch(addProdukte({...produkt, extras, preis, menge, _id}));
        router.push(`/warenkorb`);
    };

    if (!produkt) {
        console.error("[v12][produkt-detail] product not found", url);
        return <h2>Produkt nicht vorhanden</h2>;
    }

    return (
        <div>
          <div>
            <Link href="/">
              <a className="text-dark">zurueck zur Uebersicht</a>
            </Link>
          </div>

          <div className="row row-cols-2 mt-2">
            <div>
              <Image className="rounded-3" src={produkt.bild} alt={produkt.name} width={600} height={600} layout="responsive"/>
            </div>

            <div>
              <h1>{produkt.name}</h1>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2 className="text-danger">{preis.toFixed(2)}€</h2>
                </ListGroup.Item>

                <ListGroup.Item>{produkt.beschreibung}</ListGroup.Item>

                <ListGroup.Item>
                  {produkt.extras.length ? "Extras: " : <p></p>}
                  {produkt.extras.map(extra => (<span key={extra._id}>
                        {extra.text}
                        <input className="form-check-input me-2" type="checkbox" id={extra.text} onChange={(e) => addExtra(e, extra)}/>
                      </span>))}
                </ListGroup.Item>

                <ListGroup.Item>
                  <input className="form-control w-50" type="number" value={menge} min="1" max='100' onChange={(e) => setMenge(e.target.value)}/>
                </ListGroup.Item>

                <ListGroup.Item>
                  <div className="row shadow">
                    <Button variant="danger" onClick={zumWarenkorb}>Zum Warenkorb</Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>);
}
export async function getServerSideProps(context) {

    const url = context.params.url;
    try {
        await dbConnect();
        console.log("[index.js][getServerSideProps] Abfrage der Produkt-Collection läuft...");

        const res = await Produkt.findOne({url}).lean();
        const produkt = JSON.parse(JSON.stringify(res));

        return {
            props: {
                produkt
            }
        };
    }
    catch (e) {
        console.error("[index.js][getServerSideProps] Fehler beim Laden der Daten:", e.message);
        return {
            props: {
                produkte: []
            }
        };
    }
}
