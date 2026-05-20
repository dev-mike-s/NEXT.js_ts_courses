//root/komponenten/Slider.jsx
/**
 * Hero-Slider fuer visuelle Produktinszenierung, steigert Einstiegserlebnis auf Start- oder Landing-Seiten.
 * UI-Komposition mit Carousel-Komponente, Next Image fuer optimierte Medienausgabe.
 * Input statische Slide-Daten, Logic Intervall- oder Carousel-Navigation, Output rotierende Bildsequenz mit Indikatoren.
 * React Besonderheit clientseitige Timer muessen im Effect bereinigt werden, verhindert Memory-Leaks bei Re-Render und Unmount.
 */

import React from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'next/image';

export default function Slider() {

    return (
        <div>
            <Carousel controls={false} fade={true} interval={2000}>
                <Carousel.Item>
                    <Image className="d-block w-100 rounded-3" src='/bilder/essen/burger.jpg' alt='burger' width={3000} height={1000}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100 rounded-3" src='/bilder/essen/pizza.jpg' alt='burger' width={3000} height={1000}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100 rounded-3" src='/bilder/essen/burrito.jpg' alt='burger' width={3000} height={1000}/>
                </Carousel.Item>
            </Carousel>
        </div>);
}
