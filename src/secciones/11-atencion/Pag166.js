import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag166 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/166.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-15"></div>
                <div className="row adelante text-center position-relative">
                    
                <svg className="img-hover alto-25 position-absolute top-50 start-50 translate-middle" version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="874.000000pt" height="597.000000pt" viewBox="0 0 874.000000 597.000000"
                preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,597.000000) scale(0.100000,-0.100000)"
                    fill="#ffd300" stroke="none">
                    <path d="M978 5914 c-2 -2 -46 -6 -98 -9 -52 -3 -104 -9 -115 -12 -11 -4 -36
                    -8 -55 -9 -19 -1 -35 -3 -35 -5 0 -1 -9 -3 -20 -4 -20 -3 -100 -20 -145 -31
                    -14 -4 -32 -7 -40 -8 -8 -1 -30 -10 -47 -19 -18 -10 -33 -14 -33 -10 0 5 -4 3
                    -8 -3 -4 -6 -27 -24 -52 -39 -48 -30 -79 -63 -80 -82 0 -7 -4 -13 -10 -13 -5
                    0 -10 -9 -10 -19 0 -11 -5 -23 -10 -26 -6 -4 -8 -10 -5 -14 2 -5 0 -23 -6 -42
                    -6 -19 -13 -59 -14 -89 -2 -30 -7 -93 -10 -140 -4 -47 -9 -110 -11 -140 -2
                    -30 -6 -77 -8 -105 -2 -27 -7 -108 -11 -180 -3 -71 -8 -146 -10 -165 -2 -19
                    -7 -125 -11 -235 -4 -110 -8 -218 -9 -240 -2 -22 -5 -114 -9 -205 -3 -91 -8
                    -208 -11 -260 -3 -52 -8 -151 -11 -220 -8 -226 -12 -325 -14 -325 -1 0 -3 -38
                    -5 -85 -2 -47 -7 -121 -10 -165 -12 -145 -10 -302 4 -319 7 -8 9 -21 5 -27 -4
                    -8 -3 -9 4 -5 7 4 12 1 12 -7 0 -8 9 -22 20 -32 11 -10 18 -20 15 -23 -6 -6
                    60 -52 74 -52 6 0 11 -5 11 -11 0 -5 5 -7 10 -4 6 3 10 2 10 -3 0 -5 6 -9 13
                    -9 6 0 28 -3 48 -6 45 -8 448 -19 746 -21 123 0 223 -3 223 -6 0 -3 350 -5
                    778 -6 692 -1 1200 -8 1392 -19 144 -8 300 -16 393 -20 54 -2 103 -8 110 -13
                    7 -5 20 -8 30 -7 9 2 15 0 12 -5 -3 -4 6 -11 20 -14 16 -4 33 -22 47 -49 23
                    -42 23 -44 25 -573 1 -351 -2 -545 -9 -570 -11 -43 -37 -74 -84 -104 -39 -25
                    -57 -25 -719 -17 -566 8 -1276 16 -2025 22 -289 3 -663 6 -832 8 l-308 3 -1
                    -46 c0 -44 -3 -171 -13 -568 -3 -112 -7 -206 -10 -210 -2 -4 21 -7 52 -7 32
                    -1 77 -4 102 -8 25 -4 68 -9 95 -12 28 -2 70 -7 95 -10 25 -2 70 -7 100 -9 30
                    -3 98 -10 150 -16 52 -6 122 -13 155 -14 33 -2 80 -6 105 -10 51 -7 139 -14
                    255 -21 80 -4 167 -11 280 -20 33 -3 89 -7 125 -10 80 -6 364 -18 443 -19 31
                    -1 57 -3 57 -6 0 -3 53 -6 118 -7 64 -1 164 -4 222 -7 96 -4 185 -8 565 -22
                    366 -13 581 -16 1140 -13 304 1 528 -5 545 -16 21 -13 38 16 45 78 5 34 10 73
                    12 87 2 14 5 41 7 60 2 19 6 42 10 50 3 8 4 24 2 35 -1 11 1 35 5 55 4 19 10
                    59 13 88 3 29 7 56 10 60 2 4 7 43 11 87 3 44 10 99 15 123 4 24 5 52 3 63 -3
                    10 -1 19 4 19 5 0 9 12 9 27 1 31 12 138 14 138 1 0 3 23 5 50 3 46 7 80 20
                    190 3 22 7 72 10 110 10 140 22 268 31 350 3 28 7 79 9 115 2 36 6 97 9 135 9
                    105 16 209 21 310 2 50 7 124 11 165 21 241 20 462 -2 530 -19 59 -39 97 -64
                    118 -22 19 -115 62 -147 68 -14 3 -30 7 -35 10 -5 3 -25 7 -46 10 -20 2 -68
                    11 -107 19 -38 8 -94 17 -123 20 -29 2 -61 8 -70 13 -9 4 -29 7 -44 6 -16 0
                    -28 2 -28 5 0 3 -21 7 -48 9 -44 2 -81 7 -127 16 -18 3 -87 12 -170 22 -16 2
                    -55 6 -85 8 -65 6 -153 15 -195 22 -16 2 -55 6 -85 8 -30 2 -55 4 -55 5 0 1
                    -34 4 -75 6 -41 3 -97 7 -125 10 -27 3 -95 7 -150 10 -55 2 -147 7 -205 11
                    -144 9 -916 9 -1125 0 -301 -13 -348 -16 -505 -32 -127 -12 -232 -8 -245 10
                    -7 9 -17 16 -23 16 -13 0 -21 23 -28 76 -2 22 -7 48 -11 59 -3 11 -7 31 -8 45
                    -2 24 -15 138 -20 170 -1 8 -5 47 -9 85 -4 39 -9 84 -11 100 -8 60 -19 353
                    -18 475 2 189 23 521 38 600 3 14 7 49 10 78 9 91 53 154 116 168 28 6 67 6
                    724 -1 270 -2 553 -7 630 -10 232 -8 484 -21 585 -29 30 -2 95 -7 145 -11 49
                    -3 92 -8 95 -10 4 -2 53 -7 110 -10 57 -3 106 -8 110 -10 5 -3 170 -17 218
                    -18 6 0 12 -3 12 -7 0 -4 12 -6 28 -5 15 1 47 -2 72 -7 24 -4 65 -10 90 -13
                    25 -3 61 -7 80 -10 19 -3 55 -7 80 -10 25 -2 68 -7 95 -10 28 -4 64 -8 80 -10
                    17 -2 44 -6 60 -9 17 -3 66 -8 109 -11 43 -3 83 -8 87 -11 5 -3 44 -7 86 -10
                    43 -2 103 -6 133 -9 30 -3 82 -7 115 -10 33 -2 80 -7 105 -11 48 -7 56 -8 195
                    -17 50 -4 119 -10 155 -13 36 -4 76 -8 90 -10 14 -1 25 -3 25 -4 0 -1 29 -3
                    65 -5 36 -2 99 -6 140 -9 41 -3 125 -8 185 -11 61 -3 137 -8 170 -11 33 -2
                    186 -6 340 -9 459 -8 670 -17 815 -32 82 -8 93 -9 215 -18 55 -3 123 -8 150
                    -10 102 -8 233 -14 318 -17 99 -3 90 6 107 -113 6 -44 13 -93 16 -110 3 -16 7
                    -131 9 -255 3 -232 -5 -342 -31 -450 -4 -14 -8 -42 -9 -62 -2 -20 -6 -46 -10
                    -57 -8 -26 6 -29 145 -36 63 -3 129 -7 145 -9 43 -6 167 -16 260 -21 44 -3
                    108 -8 143 -11 48 -4 62 -3 63 8 5 85 -5 1264 -14 1671 l-2 87 -60 1 c-33 1
                    -71 3 -85 4 -14 2 -71 5 -127 6 -57 2 -103 6 -103 9 0 3 -30 5 -67 5 -63 1
                    -234 10 -363 21 -30 2 -91 6 -135 8 -44 2 -123 7 -175 10 -135 9 -250 16 -360
                    21 -52 2 -126 7 -164 11 -38 3 -110 8 -160 9 -50 2 -91 4 -91 5 0 2 -89 8
                    -235 15 -271 14 -431 23 -516 30 -59 5 -105 8 -329 20 -55 3 -134 7 -175 10
                    -41 3 -122 8 -180 11 -191 10 -214 12 -300 18 -77 6 -141 10 -365 21 -38 2
                    -108 6 -155 9 -47 4 -121 8 -165 11 -44 2 -125 7 -180 11 -55 4 -131 8 -170
                    10 -38 2 -110 6 -160 9 -97 6 -212 13 -315 19 -36 2 -108 7 -160 10 -165 11
                    -262 16 -375 21 -60 2 -137 7 -170 10 -33 3 -105 8 -160 11 -55 3 -129 7 -165
                    9 -36 3 -103 7 -150 10 -195 10 -260 14 -350 20 -52 4 -126 8 -165 10 -38 2
                    -106 6 -150 10 -44 3 -114 8 -155 11 -101 6 -538 13 -542 8z"/>
                    </g>
                    </svg>
                    <div className="col-1"></div>
                    <div className="col-3 d-flex flex-column alto-30 justify-content-end align-items-center py-lg-5 py-3" >
                        <img className="ancho-10" src="static/Elementosporseparado/13 Juegos de atención/mariposa.png" alt="img"/>
                        <img onClick={()=>handleClickStart(true)} className="ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atención/comienzo-rosa.png" alt="img"/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 d-flex flex-column align-items-center py-4">
                        <div className="alto-10"></div>
                        <img className=" ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atención/flor.png" id="llegada" alt="img"/>
                        <img className=" ancho-10" src="static/Elementosporseparado/13 Juegos de atención/llegada-rosa.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </>
    )
}