//root/app/layout.tsx
/**
 * Root Layout der App-Router-Anwendung, definiert dauerhaftes Shell-UI und globale Dokumentstruktur.
 * Metadata-Export, Layout-Props mit children, Server-Component-Komposition, Einbindung globaler Styles und Shared-Navigation.
 * Input geroutete Child-Segmente, Logic Einbettung in html und body sowie Rahmenkomponenten, Output konsistentes Seitenlayout.
 * Next.js Besonderheit app/layout.tsx ist verpflichtend im App Router und ersetzt die Kombination aus _app und _document.
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import type {Metadata} from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
    title: 'Willkommen zu Next v16',
    keywords: ['next.js', 'react'],
};
interface LayoutProps {
    children: React.ReactNode;
}
export default function RootLayout({children}: LayoutProps) {
    return (<html lang="de">
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

          <div className="container">
            
            <Link href="/" className="navbar-brand">
              Mein Shop
            </Link>

            <div className="navbar-nav">
              <Link href="/" className="nav-link">
                Home
              </Link>

              <Link href="/artikel" className="nav-link">
                Artikel
              </Link>

              <Link href="/benutzer" className="nav-link">
                Benutzer
              </Link>

              <Link href="/autos" className="nav-link">
                Autos
              </Link>
              </div>

          </div>

        </nav>
        
        <div className="container">
          {children}
        </div>

      </body>
    </html>);
}
