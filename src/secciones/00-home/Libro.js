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


export const Libro = () => {
    
    const { width, height } = useWindowDimensions();
    const widthBook = width *0.85 ;
    const heightBook = (width *0.56)*0.85;

    const book = useRef();
    const [playBad] = useSound(badSound);
    const [playGood] = useSound(goodSound);
    console.log(height, width);

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h3 className="d-sm-none text-center mb-5">Para una mejor experiencia gire la pantalla y recargue la pagina</h3>
            <div>
                <button className="carousel-control-prev position-absolute top-50 start-0 translate-middle" type="button" onClick={() => book.current.pageFlip().flipPrev()}>
                    <span className="carousel-control-prev-icon position-absolute top-50 start-0 translate-middle-y border border-dark ml-5 btn-secondary" aria-hidden="true"></span>
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



{/*                    
                    <img className="demoPage" src="static/Diapositivas PNG/73.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/76.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/79.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/82.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/84.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/85.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/86.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/87.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/88.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/89.png" alt="page-3"/>
                    <div className="demoPage"><video  src="static/Diapositivas PNG/93 CUERPO HUMANO ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
                    <img className="demoPage" src="static/Diapositivas PNG/104.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/105.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/106.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/108.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/113.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/120.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/127.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/134.png" alt="page-3"/>
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
                    <span className="carousel-control-next-icon position-absolute top-50 end-0 translate-middle-y border border-dark btn-secondary" aria-hidden="true" ></span>
                </button>
            </div>
            <div className="mt-3 text-center d-flex justify-content-center">
                {/* <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipPrev()}>Atras</button>
                <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipNext()}>Siguiente</button> */}
            </div>
        </div>
    )
}
