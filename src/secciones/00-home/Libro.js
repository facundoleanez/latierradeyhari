import React, {useRef, useState} from 'react';
import HTMLFlipBook from 'react-pageflip';
import useWindowDimensions, {responsiveWidth, responsiveHeight} from '../../hooks/useWindowDimensions';
import { Pag10 } from '../01-colores/Pag10';
import { Pag4 } from '../01-colores/Pag4';
import { Pag5 } from '../01-colores/Pag5';
import { Pag7 } from '../01-colores/Pag7';
import { Pag8 } from '../01-colores/Pag8';
import { Pag11 } from '../01-colores/Pag11';
import { Pag14 } from '../02-espacio/Pag14';
import { Pag15 } from '../02-espacio/Pag15';
import { Pag16 } from '../02-espacio/Pag16';
import { Pag17 } from '../02-espacio/Pag17';
import { Pag18 } from '../02-espacio/Pag18';
import { Pag19 } from '../02-espacio/Pag19';

import { useEffect } from 'react';





export const Libro = () => {
    
    const { width} = useWindowDimensions();
    const book = useRef();
    const [bookDimension, setBookDimension] = useState({w:responsiveWidth(width), h:responsiveHeight(width)})
    useEffect(() => {
        setBookDimension({w:responsiveWidth(width), h:responsiveHeight(width)})
    }, [width])
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h3 className="d-sm-none text-center mb-5">Para una mejor experiencia gire la pantalla y recargue la pagina</h3>
            <div>
                <button className="carousel-control-prev d-none d-sm-block d-lg-none" type="button" onClick={() => book.current.pageFlip().flipPrev()}><span className="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <HTMLFlipBook width={bookDimension.w} height={bookDimension.h}  useMouseEvents={false} ref={book}  autoSize={true} className="libro">
                    
                    
                    <div className="demoPage"><video  src="static/Diapositivas PNG/0 - Portada.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
                    <img className="demoPage" src="static/Diapositivas PNG/1.png" alt="page-1"/>
                    <img className="demoPage" src="static/Diapositivas PNG/2.png" alt="page-2"/>
                    <img className="demoPage" src="static/Diapositivas PNG/3.png" alt="page-3"/>
                    <div className="demoPage"><Pag4 /></div>
                    <div className="demoPage"><Pag5 /></div>
                    <img className="demoPage" src="static/Diapositivas PNG/6.png" alt="page-6"/>
                    <div className="demoPage"><Pag7/></div>
                    <div className="demoPage"><Pag8/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/9.png" alt="page-9"/>
                    <div className="demoPage"><Pag10/></div>
                    <div className="demoPage"><Pag11/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/12.png" alt="page-12"/>
                    <div className="demoPage"><video  src="static/Diapositivas PNG/13 ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
                    <div className="demoPage"><Pag14/></div>
                    <div className="demoPage"><Pag15/></div>
                    <div className="demoPage"><Pag16/></div>
                    <div className="demoPage"><Pag17/></div>
                    <div className="demoPage"><Pag18/></div>
                    <div className="demoPage"><Pag19/></div>
                    <img className="demoPage" src="static/Diapositivas PNG/20.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/21.png" alt="page-3"/>
                    


                   
                    <img className="demoPage" src="static/Diapositivas PNG/24.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/26.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/32.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/33.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/36.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/38.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/43.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/48.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/53.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/58.png" alt="page-3"/>
                    <div className="demoPage"><video  src="static/Diapositivas PNG/63 ANIMADA.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} /></div>
                    <img className="demoPage" src="static/Diapositivas PNG/69.png" alt="page-3"/>
                    <img className="demoPage" src="static/Diapositivas PNG/70.png" alt="page-3"/>
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
                    <img className="demoPage" src="static/Diapositivas PNG/169.png" alt="page-3"/>







                </HTMLFlipBook>
                <button className="carousel-control-next d-none d-sm-block d-lg-none" type="button" onClick={() => book.current.pageFlip().flipNext()}><span className="carousel-control-next-icon" aria-hidden="true"></span></button>
            </div>
            <div className="mt-3 text-center d-flex justify-content-center">
                <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipPrev()}>Atras</button>
                <button className="btn btn-primary mx-3 d-sm-none d-lg-block" onClick={() => book.current.pageFlip().flipNext()}>Siguiente</button>
            </div>
        </div>
    )
}
