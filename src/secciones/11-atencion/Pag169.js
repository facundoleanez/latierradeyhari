import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag169 = ({playBad, playGood}) => {

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
        setTimeout(()=>setStart(true),1000)
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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/169.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-10"></div>
                <div className="row adelante text-center position-relative">
                    <svg className="img-hover alto-25 position-absolute top-50 start-50 translate-middle" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="633.000000pt" height="542.000000pt" viewBox="0 0 633.000000 542.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,542.000000) scale(0.100000,-0.100000)"
                        fill="#ffd300" stroke="none">
                        <path d="M166 5358 c-8 -25 -18 -104 -22 -168 -2 -36 -6 -76 -10 -90 -3 -14
                        -8 -52 -10 -85 -2 -34 -6 -79 -10 -100 -3 -22 -7 -54 -9 -70 -1 -17 -6 -53
                        -10 -80 -3 -28 -8 -70 -10 -95 -2 -25 -6 -65 -9 -90 -3 -25 -8 -66 -10 -92 -3
                        -26 -6 -51 -7 -55 -1 -4 -1 -18 0 -31 1 -19 6 -22 29 -19 15 2 43 0 62 -4 19
                        -4 59 -10 88 -13 29 -3 56 -7 60 -10 4 -2 36 -7 72 -10 36 -4 106 -15 157 -24
                        50 -10 101 -18 112 -17 12 1 21 -2 21 -7 0 -4 3 -7 8 -6 7 2 99 -10 137 -18
                        11 -2 38 -7 60 -9 22 -3 47 -8 55 -11 8 -3 33 -8 55 -10 22 -3 56 -10 75 -17
                        19 -6 39 -10 44 -9 5 2 37 -4 72 -13 35 -9 77 -18 92 -19 15 -2 45 -9 67 -15
                        22 -5 56 -12 75 -15 19 -2 62 -11 96 -20 33 -8 71 -18 85 -20 13 -2 24 -5 24
                        -6 0 -3 39 -12 65 -15 14 -2 25 -4 25 -5 0 -1 7 -3 15 -5 8 -2 41 -11 73 -19
                        32 -9 67 -16 77 -16 11 0 20 -5 20 -11 0 -5 4 -8 9 -4 5 3 32 -4 60 -15 28
                        -11 51 -17 51 -14 0 4 7 1 15 -6 8 -7 15 -9 15 -6 0 4 12 1 28 -7 23 -12 72
                        -31 107 -41 35 -11 75 -29 75 -35 0 -4 10 -7 22 -8 11 -1 24 -6 27 -12 4 -5
                        19 -13 34 -16 15 -4 31 -14 36 -22 4 -8 11 -14 14 -14 26 4 37 0 31 -11 -4 -6
                        -3 -8 3 -5 12 7 115 -49 150 -82 12 -12 27 -21 32 -21 6 0 15 -9 21 -20 6 -11
                        15 -18 20 -15 4 3 23 -19 41 -47 28 -46 33 -63 35 -126 2 -61 -2 -77 -21 -106
                        -13 -19 -21 -36 -19 -39 6 -5 -54 -57 -66 -57 -5 0 -10 -4 -10 -10 0 -5 -4
                        -10 -9 -10 -5 0 -22 -5 -38 -11 -15 -6 -29 -10 -30 -10 -2 0 -17 -5 -35 -11
                        -18 -5 -48 -12 -67 -14 -19 -3 -42 -9 -51 -14 -10 -5 -20 -7 -23 -3 -4 3 -12
                        1 -19 -4 -7 -5 -28 -9 -45 -7 -18 1 -31 -1 -29 -5 3 -4 -3 -7 -12 -8 -36 -3
                        -97 -12 -97 -13 0 -1 -11 -3 -25 -5 -14 -1 -38 -5 -55 -9 -16 -3 -52 -8 -80
                        -11 -27 -3 -61 -7 -75 -10 -29 -6 -113 -15 -185 -20 -27 -2 -95 -8 -150 -14
                        -142 -14 -336 -29 -470 -37 -170 -9 -299 -20 -350 -30 -16 -3 -48 -8 -70 -11
                        -22 -3 -44 -9 -50 -13 -5 -4 -18 -6 -27 -5 -10 2 -18 0 -18 -5 0 -7 -42 -23
                        -66 -25 -6 0 -25 -13 -43 -28 -18 -15 -36 -27 -40 -27 -13 0 -121 -107 -121
                        -119 0 -6 -4 -11 -8 -11 -9 0 -42 -64 -60 -115 -5 -16 -14 -39 -18 -50 -4 -11
                        -9 -33 -11 -48 -1 -15 -7 -36 -12 -45 -13 -26 -4 -203 15 -288 9 -43 27 -104
                        40 -137 13 -33 21 -63 19 -67 -3 -4 2 -13 10 -20 8 -7 26 -37 39 -66 14 -30
                        35 -69 47 -85 12 -17 19 -33 15 -36 -3 -3 2 -12 12 -19 9 -7 17 -17 17 -22 0
                        -5 10 -22 22 -38 76 -101 124 -168 137 -192 9 -15 15 -23 16 -19 0 4 13 -7 29
                        -25 16 -18 28 -37 27 -41 0 -5 9 -14 20 -20 12 -7 41 -29 65 -50 85 -72 219
                        -159 219 -141 0 4 6 2 13 -3 18 -15 87 -37 122 -39 17 -1 57 -6 90 -12 57 -9
                        209 -8 305 2 25 3 70 8 100 11 30 3 84 10 120 16 36 5 83 12 105 14 66 7 131
                        15 156 21 13 3 44 7 69 9 25 3 63 7 85 10 22 3 54 8 70 10 17 2 62 11 100 18
                        39 8 90 15 113 16 24 0 47 3 50 5 4 2 32 7 62 11 30 3 64 9 75 12 11 3 35 7
                        55 8 19 1 51 5 70 8 19 4 63 9 97 12 35 3 68 8 75 10 23 9 202 29 256 30 17 0
                        32 4 32 8 0 5 3 6 8 4 4 -2 39 -1 77 4 39 5 111 11 160 14 50 3 124 8 165 11
                        225 18 710 18 840 0 14 -2 66 -7 115 -11 50 -4 94 -9 99 -12 5 -4 23 -7 40 -9
                        51 -4 218 -43 231 -54 6 -5 14 -8 17 -5 7 7 68 -16 68 -26 0 -4 7 -6 15 -3 8
                        4 15 2 15 -3 0 -5 10 -10 22 -10 13 -1 24 -7 26 -13 2 -5 12 -10 23 -10 10 0
                        19 -4 19 -10 0 -5 16 -16 36 -25 22 -9 33 -19 28 -26 -4 -7 -3 -9 3 -6 16 10
                        126 -101 147 -148 11 -22 22 -42 26 -45 15 -11 43 -110 54 -192 16 -115 10
                        -450 -9 -518 -2 -8 -7 -40 -10 -70 -3 -30 -11 -79 -16 -108 -6 -30 -8 -56 -5
                        -59 6 -6 14 -7 251 -24 88 -6 187 -13 220 -15 33 -3 83 -7 110 -9 28 -2 50 -4
                        50 -5 0 0 40 -2 88 -4 71 -3 92 0 108 13 23 18 25 32 33 251 3 63 8 147 12
                        185 4 39 8 86 9 105 2 19 4 35 5 35 7 0 12 308 6 395 -2 19 -7 60 -11 90 -5
                        30 -9 60 -10 65 -1 6 -4 21 -8 35 -4 14 -9 39 -10 55 -2 17 -9 40 -16 53 -6
                        12 -9 22 -6 22 2 0 -4 22 -14 48 -11 26 -21 59 -23 72 -1 14 -6 27 -9 30 -3 3
                        -24 43 -46 90 -23 47 -53 102 -66 122 -14 20 -23 39 -21 42 2 3 1 4 -3 1 -3
                        -3 -20 12 -37 32 -46 56 -114 120 -173 164 -29 22 -53 43 -53 48 0 4 -12 13
                        -26 19 -16 8 -22 17 -18 25 4 6 4 9 -1 5 -8 -7 -43 14 -80 49 -11 11 -28 22
                        -38 26 -10 4 -15 11 -12 17 3 5 -3 10 -14 10 -12 0 -21 4 -21 8 0 5 -12 15
                        -27 23 -16 8 -30 16 -33 19 -16 17 -130 90 -139 90 -6 0 -11 5 -11 10 0 6 -7
                        10 -15 10 -8 0 -23 9 -32 19 -9 11 -20 18 -25 15 -4 -3 -8 0 -8 5 0 6 -7 11
                        -16 11 -9 0 -39 12 -68 26 -28 14 -58 30 -66 34 -9 4 -30 11 -48 15 -18 3 -32
                        11 -32 16 0 6 -4 8 -9 5 -4 -3 -23 -1 -42 5 -51 15 -70 20 -149 35 -33 6 -186
                        17 -225 15 -59 -1 -150 -9 -175 -15 -14 -3 -41 -8 -60 -10 -19 -3 -62 -10 -95
                        -15 -33 -6 -80 -13 -104 -16 -24 -3 -48 -8 -52 -11 -12 -7 -46 -14 -94 -19
                        -22 -2 -55 -8 -73 -14 -18 -5 -33 -10 -35 -9 -1 0 -18 -3 -37 -6 -19 -3 -53
                        -8 -75 -10 -22 -3 -40 -5 -40 -6 0 -2 -25 -7 -75 -13 -25 -4 -54 -8 -66 -11
                        -12 -2 -45 -7 -75 -11 -30 -3 -61 -8 -69 -10 -8 -3 -35 -7 -60 -10 -25 -3 -65
                        -8 -90 -11 -25 -4 -56 -8 -70 -9 -14 -2 -43 -6 -65 -9 -22 -3 -65 -8 -95 -12
                        -30 -3 -66 -8 -80 -10 -14 -2 -54 -6 -90 -8 -36 -3 -81 -8 -100 -11 -47 -7
                        -140 -15 -225 -20 -109 -7 -193 -13 -280 -19 -276 -21 -505 -30 -505 -18 0 13
                        84 32 160 36 14 0 27 4 30 7 3 4 37 10 75 13 67 6 103 10 190 20 22 2 51 7 65
                        10 14 4 41 8 62 10 20 2 40 6 45 9 9 6 79 19 103 19 8 1 21 5 28 11 6 5 12 6
                        12 1 0 -5 4 -3 8 3 4 7 17 14 27 16 23 5 51 14 82 29 11 6 26 7 32 4 6 -4 11
                        -2 11 4 0 6 5 8 10 5 6 -3 10 -2 10 3 0 10 38 25 54 23 5 -1 12 2 15 7 3 5 31
                        22 61 37 30 15 67 36 82 46 14 11 33 19 42 19 9 0 16 4 16 8 0 4 28 26 63 49
                        34 23 73 50 86 62 13 11 28 18 34 14 5 -3 7 -1 4 4 -4 6 0 16 8 23 8 7 15 9
                        15 5 0 -5 59 51 130 124 72 73 130 135 130 137 0 5 15 24 42 55 10 10 18 23
                        18 29 0 5 5 10 10 10 6 0 10 7 10 16 0 8 4 13 8 10 5 -3 14 11 21 30 7 20 17
                        32 23 28 7 -4 8 -2 4 5 -4 6 -2 19 5 28 48 57 120 231 111 266 -1 4 2 7 6 7
                        25 0 -9 231 -50 336 -10 28 -20 60 -21 72 -1 12 -4 22 -7 22 -3 0 -16 28 -30
                        63 -13 34 -39 90 -57 125 -18 34 -29 62 -25 62 4 0 -1 5 -10 11 -10 5 -18 15
                        -18 20 0 6 -9 24 -21 40 -11 16 -17 29 -13 29 4 0 -1 7 -12 16 -10 8 -12 13
                        -4 9 8 -4 6 1 -5 10 -11 9 -19 21 -18 26 2 5 -1 9 -6 9 -5 0 -26 24 -47 53
                        -20 28 -43 56 -50 60 -8 4 -14 15 -14 22 0 8 -4 15 -9 15 -5 0 -13 9 -16 20
                        -3 11 -10 20 -15 20 -5 0 -23 14 -40 30 -17 17 -28 30 -25 30 6 0 -75 79 -98
                        95 -72 51 -136 103 -132 107 3 2 -1 5 -9 5 -7 0 -33 13 -57 30 -82 56 -124 80
                        -214 124 -49 24 -91 47 -93 52 -2 4 -10 7 -17 7 -8 0 -26 5 -42 12 -33 13 -30
                        12 -65 22 -16 5 -28 12 -28 18 0 5 -4 7 -9 3 -5 -3 -12 -1 -16 4 -3 6 -12 8
                        -19 5 -8 -3 -28 2 -45 10 -17 9 -34 16 -38 16 -5 1 -26 6 -48 12 -22 7 -44 13
                        -50 14 -5 1 -12 3 -15 4 -3 1 -16 3 -30 6 -21 3 -40 8 -82 19 -5 2 -9 3 -10 5
                        -2 1 -16 4 -33 6 -16 3 -46 10 -65 16 -19 6 -47 11 -62 10 -15 0 -28 3 -28 6
                        0 4 -12 7 -27 6 -16 -1 -42 4 -60 11 -17 8 -33 11 -35 9 -3 -2 -42 3 -89 11
                        -46 9 -102 17 -124 20 -22 3 -56 8 -75 11 -19 3 -55 8 -80 11 -25 3 -50 10
                        -57 15 -7 5 -17 7 -22 4 -5 -4 -31 -2 -56 4 -26 6 -70 12 -98 14 -29 2 -79 9
                        -112 14 -33 6 -67 11 -75 11 -26 1 -95 10 -95 12 0 1 -18 3 -40 5 -43 3 -148
                        12 -235 19 -30 3 -153 7 -273 10 -171 4 -218 3 -221 -7z"/>
                        </g>
                        </svg>
                    <div className="col-2"></div>
                    <div className="col-3 d-flex flex-column align-items-center alto-35">
                        <div className="alto-5"></div>
                        <img className="ancho-10 adelante-2 img-hover" src="static/Elementosporseparado/13 Juegos de atención/llegada-verde.png" id="llegada" alt="img"/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3 d-flex align-items-end " >
                        <img onClick={()=>handleClickStart(true)} className="ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atención/comienzo-verde.png" alt="img"/>
                        <img className="ancho-10" src="static/Elementosporseparado/13 Juegos de atención/pez.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </>
    )
}