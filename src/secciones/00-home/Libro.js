import React, {useRef} from 'react';
import HTMLFlipBook from 'react-pageflip';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Pag3 } from '../01-colores/Pag3';
import { Pag7 } from '../01-colores/Pag7';



export const Libro = () => {
    
    const {height, width} = useWindowDimensions();
    console.log(height, width)
    const book = useRef();

    const responsiveWidth = () => {
        if ( width <= 576) {
            return 320
        } else if (width <= 992) {
            return 480
        } else if (width <= 1600) {
            return 960   
        } else {
            return 1200
        }
    };

    const responsiveHeight = () => {
        if ( width <= 576) {
            return 180
        } else if (width <= 992) {
            return 270
        } else if (width <= 1600) {
            return 540
        } else {
            return 810
        }
    };
    


    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h3 className="d-sm-none text-center mb-5">Para una mejor experiencia gire la pantalla</h3>
            <div>
                <button className="carousel-control-prev d-none d-sm-block d-lg-none" type="button" onClick={() => book.current.pageFlip().flipPrev()}><span className="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <HTMLFlipBook width={responsiveWidth()} height={responsiveHeight()}  useMouseEvents={false} ref={book}  autoSize={false}>
                    
                    <video className="demoPage" src="static/Diapositivas PNG/0 - Portada.mp4" width="960" height="540" loop={true} autoPlay={true} ></video>
                    <img className="demoPage" src="static/Diapositivas PNG/1.png" alt="page-1"/>
                    <img className="demoPage" src="static/Diapositivas PNG/2.png" alt="page-2"/>
                    <img className="demoPage" src="static/Diapositivas PNG/3.png" alt="page-3"/>
                    <div className="demoPage  bg-rosa "><Pag3/></div>
                    <div className="demoPage bg-rosa"><Pag7/></div>

                    <div className="demoPage  bg-blanco"></div>
                    <div className="demoPage  bg-violeta">Page 3</div>
                    <div className="demoPage bg-amarillo">Page 4</div>
                    <div className="demoPage">Page 5</div>
                    <div className="demoPage">Page 6</div>
                    <div className="demoPage">Page 7</div>

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
