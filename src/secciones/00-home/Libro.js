import React, {useRef} from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';



import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Pag4 } from '../01-colores/Pag4';
import { Pag5 } from '../01-colores/Pag5';
import { Pag7 } from '../01-colores/Pag7';
import { Pag8 } from '../01-colores/Pag8';
import { Pag10 } from '../01-colores/Pag10';
import { Pag11 } from '../01-colores/Pag11';
import { Pag14 } from '../02-espacio/Pag14';
import { Pag15 } from '../02-espacio/Pag15';
import { Pag16 } from '../02-espacio/Pag16';
import { Pag17 } from '../02-espacio/Pag17';
import { Pag18 } from '../02-espacio/Pag18';
import { Pag19 } from '../02-espacio/Pag19';
import { Pag22 } from '../03-formas/Pag22';
import { Pag23 } from '../03-formas/Pag23';
import { Pag24 } from '../03-formas/Pag24b';
import { Pag27 } from '../03-formas/Pag27';

import badSound from '../../sounds/bad.mp3';
import goodSound from '../../sounds/good.mp3';
import { Pag25 } from '../03-formas/Pag25';
import { Pag28 } from '../03-formas/Pag28';
import { Pag29 } from '../03-formas/Pag29';
import { Pag30 } from '../03-formas/Pag30';
import { Pag31 } from '../03-formas/Pag31';
import { Pag35 } from '../04-num-0-5/Pag35';
import { Pag36 } from '../04-num-0-5/Pag36';
import { Pag37 } from '../04-num-0-5/Pag37';
import { Pag40 } from '../04-num-0-5/Pag40';
import { Pag41 } from '../04-num-0-5/Pag41';
import { Pag42 } from '../04-num-0-5/Pag42';
import { Pag45 } from '../04-num-0-5/Pag45';
import { Pag46 } from '../04-num-0-5/Pag46';
import { Pag47 } from '../04-num-0-5/Pag47';
import { Pag50 } from '../04-num-0-5/Pag50';
import { Pag51 } from '../04-num-0-5/Pag51';
import { Pag52 } from '../04-num-0-5/Pag52';
import { Pag55 } from '../04-num-0-5/Pag55';
import { Pag56 } from '../04-num-0-5/Pag56';
import { Pag57 } from '../04-num-0-5/Pag57';
import { Pag60 } from '../04-num-0-5/Pag60';
import { Pag61 } from '../04-num-0-5/Pag61';
import { Pag62 } from '../04-num-0-5/Pag62';
import { Pag34 } from '../04-num-0-5/Pag34';
import { Pag39 } from '../04-num-0-5/Pag39';
import { Pag44 } from '../04-num-0-5/Pag44';
import { Pag49 } from '../04-num-0-5/Pag49';
import { Pag54 } from '../04-num-0-5/Pag54';
import { Pag59 } from '../04-num-0-5/Pag59';
import { Pag64 } from '../04-num-0-5/Pag64';
import { Pag65 } from '../04-num-0-5/Pag65';
import { Pag66 } from '../04-num-0-5/Pag66';
import { Pag67 } from '../04-num-0-5/Pag67';
import { Pag68 } from '../04-num-0-5/Pag68';
import { Pag71 } from '../05-vocales/Pag71';
import { Pag72 } from '../05-vocales/Pag72';
import { Pag74 } from '../05-vocales/Pag74';
import { Pag75 } from '../05-vocales/Pag75';
import { Pag77 } from '../05-vocales/Pag77';
import { Pag78 } from '../05-vocales/Pag78';
import { Pag80 } from '../05-vocales/Pag80';
import { Pag81 } from '../05-vocales/Pag81';
import { Pag83 } from '../05-vocales/Pag83';
import { Pag84 } from '../05-vocales/Pag84';
import { Pag86 } from '../06-tamano/Pag86';
import { Pag87 } from '../06-tamano/Pag87';
import { Pag88 } from '../06-tamano/Pag88';
import { Pag89 } from '../06-tamano/Pag89';
import { Pag90 } from '../06-tamano/Pag90';
import { Pag91 } from '../06-tamano/Pag91';
import { Pag92 } from '../06-tamano/Pag92';
import { Pag93 } from '../07-cuerpo/Pag93';
import { Pag94 } from '../07-cuerpo/Pag94';
import { Pag95 } from '../07-cuerpo/Pag95';
import { Pag96 } from '../07-cuerpo/Pag96';
import { Pag97 } from '../07-cuerpo/Pag97';
import { Pag99 } from '../07-cuerpo/Pag99';
import { Pag100 } from '../07-cuerpo/Pag100';
import { Pag101 } from '../07-cuerpo/Pag101';
import { Pag102 } from '../07-cuerpo/Pag102';
import { Pag103 } from '../07-cuerpo/Pag103';
import { Pag107 } from '../08-num-6-10/Pag107';
import { Pag114 } from '../08-num-6-10/Pag114';
import { Pag121 } from '../08-num-6-10/Pag121';
import { Pag128 } from '../08-num-6-10/Pag128';
import { Pag135 } from '../08-num-6-10/Pag135';
import { Pag108 } from '../08-num-6-10/Pag108';
import { Pag109 } from '../08-num-6-10/Pag109';
import { Pag115 } from '../08-num-6-10/Pag115';
import { Pag116 } from '../08-num-6-10/Pag116';
import { Pag122 } from '../08-num-6-10/Pag122';
import { Pag123 } from '../08-num-6-10/Pag123';
import { Pag129 } from '../08-num-6-10/Pag129';
import { Pag130 } from '../08-num-6-10/Pag130';
import { Pag136 } from '../08-num-6-10/Pag136';
import { Pag137 } from '../08-num-6-10/Pag137';
import { Pag110 } from '../08-num-6-10/Pag110';
import { Pag111 } from '../08-num-6-10/Pag111';
import { Pag112 } from '../08-num-6-10/Pag112';
import { Pag117 } from '../08-num-6-10/Pag117';
import { Pag118 } from '../08-num-6-10/Pag118';
import { Pag119 } from '../08-num-6-10/Pag119';
import { Pag124 } from '../08-num-6-10/Pag124';
import { Pag125 } from '../08-num-6-10/Pag125';
import { Pag126 } from '../08-num-6-10/Pag126';
import { Pag131 } from '../08-num-6-10/Pag131';
import { Pag132 } from '../08-num-6-10/Pag132';
import { Pag133 } from '../08-num-6-10/Pag133';
import { Pag138 } from '../08-num-6-10/Pag138';
import { Pag139 } from '../08-num-6-10/Pag139';
import { Pag140 } from '../08-num-6-10/Pag140';


export const Libro = () => {
    
    const { width } = useWindowDimensions();
    const widthBook = width *0.85 ;
    const heightBook = (width *0.56)*0.85;

    const book = useRef();
    const [playBad] = useSound(badSound);
    const [playGood] = useSound(goodSound);
    

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div>
                <button className="carousel-control-prev position-absolute top-50 start-0 translate-middle" type="button" onClick={() => book.current.pageFlip().flipPrev()}>
                    <span className="carousel-control-prev-icon position-absolute top-50 start-0 translate-middle-y ml-5 btn btn-primary" aria-hidden="true"></span>
                </button>
                <HTMLFlipBook width={widthBook} height={heightBook}  useMouseEvents={false} ref={book}  autoSize={true} className="libro">
                   
                   



                    <div className="demoPage"><video  src="static/Diapositivas PNG/0 - Portada.mp4" loop={true} autoPlay={true} width={widthBook} height={heightBook}/></div>
                    
                    <img className="demoPage" src="static/Diapositivas PNG/1.png" alt="page-1"/>
                    <img className="demoPage" src="static/Diapositivas PNG/2.png" alt="page-2"/>
                    <img className="demoPage" src="static/Diapositivas PNG/3.png" alt="page-3"/>
                    <div className="demoPage"><Pag4 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag5 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/6.png" alt="page-6"/>
                    <div className="demoPage"><Pag7 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag8 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/9.png" alt="page-9"/>
                    <div className="demoPage"><Pag10 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag11 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/12.png" alt="page-12"/>
                    {/* <div className="demoPage"><video  src="static/Diapositivas PNG/13 ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div> */}
                    <div className="demoPage"><Pag14 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag15 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag16 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag17 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag18 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag19 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/20.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/21.png" alt="page-3"/>
                    <div className="demoPage"><Pag22 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag23 playBad={playBad} playGood={playGood}/></div> 
                    <img className="demoPage" src="static/Diapositivas PNG/24.png" alt="page-3"/>
                    <div className="demoPage"><Pag24 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag25 playBad={playBad} playGood={playGood}/></div> 
                    <img className="demoPage" src="static/Diapositivas PNG/26.png" alt="page-3"/>
                    <div className="demoPage"><Pag27 playBad={playBad} playGood={playGood}/></div> 
                    <div className="demoPage"><Pag28 playBad={playBad} playGood={playGood}/></div> 
                    <div className="demoPage"><Pag29 playBad={playBad} playGood={playGood}/></div> 
                    <div className="demoPage"><Pag30 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag31 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/32.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/33.png" alt="page-3"/>
                    <div className="demoPage"><Pag34 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag35 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag36 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag37 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/38.png" alt="page-3"/>
                    <div className="demoPage"><Pag39 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag40 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag41 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag42 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/43.png" alt="page-3"/>
                    <div className="demoPage"><Pag44 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag45 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag46 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag47 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/48.png" alt="page-3"/>
                    <div className="demoPage"><Pag49 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag50 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag51 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag52 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/53.png" alt="page-3"/>
                    <div className="demoPage"><Pag54 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag55 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag56 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag57 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/58.png" alt="page-3"/>
                    <div className="demoPage"><Pag59 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag60 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag61 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag62 playBad={playBad} playGood={playGood}/></div>
                    {/* <div className="demoPage"><video  src="static/Diapositivas PNG/63 ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div> */}                    
                    <div className="demoPage"><Pag64 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag65 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag66 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag67 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag68 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/69.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/70.png" alt="page-3"/>
                    <div className="demoPage"><Pag71 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag72 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/73.png" alt="page-3"/>
                    <div className="demoPage"><Pag74 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag75 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/76.png" alt="page-3"/>
                    <div className="demoPage"><Pag77 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag78 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/79.png" alt="page-3"/>
                    <div className="demoPage"><Pag80 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag81 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/82.png" alt="page-3"/>
                    <div className="demoPage"><Pag83 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag84 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/84.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/85.png" alt="page-3"/>
                    <div className="demoPage"><Pag86 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag87 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag88 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag89 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag90 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag91 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag92 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><video  src="static/Diapositivas PNG/93 CUERPO HUMANO ANIMADA.mp4" width={widthBook} height={heightBook} loop={true} autoPlay={true} /></div>
                    <div className="demoPage"><Pag93 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag94 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag95 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag96 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag97 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/98.png" alt="page-3"/>
                    <div className="demoPage"><Pag99 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag100 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag101 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag102 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag103 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/104.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/105.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/106.png" alt="page-3"/>
                    <div className="demoPage"><Pag107 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag108 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag109 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag110 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag111 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag112 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/113.png" alt="page-3"/>
                    <div className="demoPage"><Pag114 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag115 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag116 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag117 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag118 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag119 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/120.png" alt="page-3"/>
                    <div className="demoPage"><Pag121 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag122 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag123 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag124 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag125 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag126 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/127.png" alt="page-3"/>
                    <div className="demoPage"><Pag128 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag129 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag130 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag131 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag132 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag133 playBad={playBad} playGood={playGood}/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/134.png" alt="page-3"/>
                    <div className="demoPage"><Pag135 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag136 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag137 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag138 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag139 playBad={playBad} playGood={playGood}/></div>
                    <div className="demoPage"><Pag140 playBad={playBad} playGood={playGood}/></div>




{/*                    
                    <img className="demoPage" src="static/Diapositivas PNG/108.png" alt="page-3"/>

<div className="demoPage"><video  src="static/Diapositivas PNG/141 ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
<img className="demoPage" src="static/Diapositivas PNG/144.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/150.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/154.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/155.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/156.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/157.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/158.png" alt="page-3"/>
                    <div className="demoPage"><video  src="static/Diapositivas PNG/163 JUEGOS DE ATENCION ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
                    <img className="demoPage" src="static/Diapositivas PNG/163.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/164.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/165.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/166.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/167.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/168.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/169.png" alt="page-3"/> */}
                </HTMLFlipBook>
                <button className="carousel-control-next position-absolute top-50 start-100 translate-middle" type="button" onClick={() => book.current.pageFlip().flipNext()}>
                    <span className="carousel-control-next-icon position-absolute top-50 end-0 translate-middle-y btn btn-primary" aria-hidden="true" ></span>
                </button>
            </div>
            <div className="mt-3 text-center d-flex justify-content-center">
                {/* <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipPrev()}>Atras</button>
                <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipNext()}>Siguiente</button> */}
            </div>
        </div>
    )
}
