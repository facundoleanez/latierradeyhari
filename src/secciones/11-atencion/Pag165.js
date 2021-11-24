import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag165 = ({playBad, playGood}) => {

    const [start, setStart] = useState(false)
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

    const handleHover = (event)=>{
        if (start && event.target.tagName === "path"){
            setGood(true)
        } else if (start && event.target.id === "llegada" ) {
            setCompleted(true)
            setStart(false)
        } else if (start) {
            setWrong(true)
            setGood(false)
            
        }
    }

    const touchEvent = (event) => {
        const touch = event.touches[0]
        const elementTouched = document.elementsFromPoint(touch.pageX, touch.pageY)
        if (elementTouched[0].tagName === "path"){
            setGood(true)
        } else if (elementTouched[0].id === "llegada" ) {
            setCompleted(true)
        } else {
            setWrong(true)
            setGood(false)
            
        }
    }
    const handleClickStart = ()=>{
        setTimeout(()=>setStart(true),1500)
    }

    useEffect(() => {
        if (wrong) {
            const timeOut = setTimeout(()=>setWrong(false), 500)
            playBad()
            return () => {
                clearTimeout(timeOut)
            }
            
        }
    }, [wrong, playBad])

    return (
        <>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row" onTouchMove={touchEvent} onMouseMove={handleHover}>
                <img className="position-absolute p-0" src="static/Diapositivas PNG/165.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-10"></div>
                <div className="row adelante text-center position-relative">
                    <svg className="img-hover alto-25 position-absolute bottom-0 start-50 translate-middle-x" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1057.000000pt" height="543.000000pt" viewBox="0 0 1057.000000 543.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,543.000000) scale(0.100000,-0.100000)"
                        fill="#ffd300" stroke="none">
                        <path d="M4210 5368 c-25 -4 -51 -6 -57 -3 -7 2 -13 0 -13 -5 0 -6 -3 -9 -7
                        -8 -23 6 -114 -16 -126 -30 -15 -17 -26 -69 -34 -157 -6 -67 -10 -100 -13
                        -100 -1 0 -4 -11 -5 -25 -3 -31 -13 -113 -30 -245 -2 -22 -7 -62 -11 -90 -5
                        -49 -10 -80 -14 -100 -6 -28 2 -55 19 -65 11 -5 79 -12 153 -15 130 -5 181 -9
                        303 -19 33 -3 94 -8 135 -11 41 -3 102 -8 135 -10 33 -2 96 -7 140 -9 44 -3
                        107 -8 140 -11 65 -6 154 -12 310 -20 55 -3 106 -8 113 -10 8 -3 71 -8 140
                        -11 70 -3 138 -7 152 -10 27 -5 94 -10 395 -29 44 -2 105 -7 135 -11 30 -3 82
                        -7 115 -9 33 -2 98 -7 145 -10 47 -3 114 -8 150 -10 36 -3 94 -7 130 -10 36
                        -3 99 -7 140 -10 41 -2 100 -7 130 -9 30 -3 100 -8 155 -12 55 -3 118 -7 140
                        -9 22 -2 45 -4 52 -4 8 -1 10 -40 7 -148 -7 -233 -19 -702 -28 -1146 -3 -119
                        -7 -221 -10 -226 -6 -10 23 -45 41 -48 27 -5 198 -34 228 -38 11 -2 20 -4 20
                        -5 0 -1 9 -3 20 -5 11 -1 36 -5 55 -8 19 -4 62 -9 95 -12 33 -4 75 -8 93 -10
                        18 -2 50 -6 70 -9 20 -4 62 -8 92 -11 30 -3 81 -7 112 -11 358 -38 876 -46
                        1376 -20 51 3 62 0 63 -13 3 -38 12 -218 24 -486 15 -334 21 -744 12 -780 -3
                        -11 -6 -23 -6 -26 -1 -3 -14 -20 -29 -37 -22 -25 -42 -34 -83 -42 -97 -17
                        -133 -21 -222 -25 -49 -2 -118 -7 -155 -10 -172 -13 -217 -16 -357 -22 -223
                        -8 -1195 -9 -1390 -1 -250 11 -376 18 -410 22 -16 2 -97 7 -180 11 -82 4 -153
                        9 -156 11 -3 1 -43 5 -90 9 -339 22 -349 23 -404 29 -27 3 -81 8 -120 11 -38
                        3 -90 7 -115 10 -25 2 -73 7 -107 10 -34 3 -71 8 -82 10 -11 2 -64 7 -118 10
                        -54 4 -111 8 -128 10 -70 8 -153 16 -190 19 -61 5 -276 26 -315 32 -52 7 -106
                        13 -185 19 -38 3 -90 8 -115 10 -25 3 -75 7 -111 9 -36 2 -85 6 -110 10 -24 3
                        -75 8 -114 11 -38 3 -86 8 -105 10 -57 7 -180 17 -250 20 -36 1 -65 3 -65 4 0
                        2 -114 9 -251 16 -61 3 -126 8 -145 10 -19 3 -88 7 -154 10 -66 2 -163 7 -215
                        10 -143 8 -289 15 -445 21 -277 10 -392 14 -510 19 -144 6 -456 16 -615 19
                        -261 7 -662 18 -765 22 -60 2 -202 7 -315 9 -286 6 -407 12 -420 20 -7 4 -9
                        -4 -5 -24 3 -16 7 -119 10 -228 3 -109 7 -279 10 -378 4 -99 8 -241 10 -315 2
                        -74 4 -138 4 -141 1 -3 21 -5 46 -4 25 1 45 -1 45 -4 0 -3 15 -6 33 -7 34 0
                        185 -12 252 -19 22 -2 78 -7 124 -11 46 -3 94 -8 105 -10 12 -3 46 -5 77 -5
                        31 0 70 -4 88 -9 22 -6 29 -6 25 2 -5 7 -2 8 5 4 7 -5 38 -10 69 -12 31 -2 86
                        -6 122 -8 36 -3 106 -8 155 -11 50 -3 119 -8 154 -11 35 -3 100 -7 145 -9 44
                        -3 117 -7 161 -11 44 -4 119 -8 167 -8 49 -1 88 -3 88 -6 0 -3 21 -5 48 -5 61
                        0 366 -14 462 -21 41 -3 111 -7 155 -9 44 -2 136 -6 205 -9 330 -15 391 -17
                        475 -20 102 -4 373 -16 485 -22 41 -2 131 -6 200 -8 69 -3 184 -8 255 -12 72
                        -4 173 -8 225 -9 52 -2 95 -4 95 -5 0 -1 43 -3 95 -5 165 -5 413 -16 470 -21
                        30 -3 102 -7 160 -9 58 -3 130 -7 160 -10 30 -2 116 -7 190 -10 74 -3 160 -8
                        190 -10 30 -3 105 -7 165 -11 123 -6 157 -8 265 -19 41 -4 104 -9 140 -11 36
                        -2 101 -6 145 -9 44 -3 112 -7 150 -10 39 -2 99 -7 135 -10 89 -7 194 -15 445
                        -31 133 -9 803 -9 935 0 52 3 136 8 185 11 50 2 119 7 155 10 36 4 98 8 139
                        10 41 2 102 7 135 10 34 4 81 8 106 11 25 2 74 6 110 9 36 2 83 7 105 9 45 6
                        135 14 245 21 68 5 134 10 230 20 19 2 89 6 155 10 66 4 129 9 140 11 11 2 56
                        6 100 9 225 13 318 27 340 49 27 28 43 110 51 266 2 36 6 92 8 125 2 33 7 114
                        10 180 3 66 9 143 12 170 3 28 7 88 9 135 2 47 7 126 10 177 8 105 11 182 19
                        403 3 85 8 180 11 210 7 77 16 308 30 850 11 394 10 540 -1 548 -6 4 -19 21
                        -29 39 -12 20 -30 35 -47 38 -15 4 -28 10 -28 15 0 4 -11 7 -24 6 -13 -2 -50
                        1 -82 5 -61 9 -148 14 -434 25 -214 8 -841 8 -1040 -1 -386 -16 -386 -16 -386
                        3 -1 9 -4 58 -8 107 -20 244 -21 789 -1 1070 4 55 9 123 10 150 2 28 6 68 9
                        90 3 22 7 62 8 90 3 45 1 51 -24 63 -26 12 -54 18 -118 26 -14 2 -51 11 -84
                        20 -32 10 -65 15 -73 11 -9 -3 -22 0 -29 6 -7 6 -17 8 -22 5 -4 -2 -26 0 -48
                        5 -21 5 -55 12 -74 14 -19 3 -44 8 -55 12 -11 4 -28 6 -37 4 -10 -1 -25 2 -35
                        8 -10 5 -41 10 -68 12 -28 1 -54 5 -60 8 -5 3 -16 6 -25 7 -8 1 -37 5 -65 8
                        -92 11 -193 25 -225 32 -37 7 -96 14 -165 19 -33 3 -76 7 -95 10 -60 9 -192
                        22 -305 31 -44 3 -100 8 -125 10 -25 3 -52 5 -60 5 -8 0 -76 5 -150 10 -186
                        13 -601 27 -1300 44 -182 5 -287 9 -470 21 -136 9 -474 10 -520 2z"/>
                        </g>
                    </svg>
                    <div className="col-1"></div>
                    <div className="col-2  d-flex flex-column alto-30 justify-content-end align-items-center py-lg-5 py-3" >
                        <img className="ancho-10" src="static/Elementosporseparado/13 Juegos de atención/abeja.png" alt="img"/>
                        <img onClick={()=>handleClickStart(true)} className="ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atención/comienzo-amarillo.png" alt="img"/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2  d-flex flex-column align-items-center ">
                        <img className=" ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atención/panal.png" id="llegada" alt="img"/>
                        <img className=" ancho-10" src="static/Elementosporseparado/13 Juegos de atención/llegada-amarillo.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </>
    )
}