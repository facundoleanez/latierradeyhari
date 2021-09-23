import React, {useRef} from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Pag3 } from '../01-colores/Pag3';
import { Pag7 } from '../01-colores/Pag7';



export const Libro = () => {

    const book = useRef();
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <HTMLFlipBook width={960} height={540} autoSize={false} useMouseEvents={false} ref={book} >
                
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

            <div className="text-center mt-3">
                <button className="btn btn-primary mx-3" onClick={() => book.current.pageFlip().flipPrev()}>Atras</button>
                <button className="btn btn-primary mx-3" onClick={() => book.current.pageFlip().flipNext()}>Siguiente</button>
            </div>
        </div>
    )
}
