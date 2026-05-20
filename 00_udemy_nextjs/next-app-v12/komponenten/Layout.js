//root/komponenten/Layout.js
/**
 * Layout-Komponente fuer wiederverwendbaren Seitenrahmen, kombiniert Kopfbereich, Inhaltscontainer und optionale Fusszeile.
 * Kompositionsmuster mit children-Prop, Import von Unterkomponenten und optional next/head fuer Meta-Tags im Pages Router.
 * Input Child-Content aus aufrufenden Seiten, Logic strukturelle Einbettung, Output konsistente UI-Huelle ueber mehrere Routen.
 * Next.js Besonderheit Layout-Ketten variieren zwischen Pages Wrappern und App-Router Root-Layouts, hier projektintern abstrahiert.
 */

import styles from '../styles/Layout.module.css';
import Navigation from './Navigation';

export default function Layout( {children} ) {

    return (<>
        <Navigation />
        <div className={styles.main}>
            {children}
        </div>
    </>);
}
