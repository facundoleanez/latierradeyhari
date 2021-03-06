import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag167 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/167.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-10"></div>
                <div className="row adelante text-center position-relative">
                    <svg className="img-hover alto-25 position-absolute top-50 start-50 translate-middle" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="920.000000pt" height="564.000000pt" viewBox="0 0 920.000000 564.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,564.000000) scale(0.100000,-0.100000)"
                        fill="#ffd300" stroke="none">
                        <path d="M4123 5583 c-5 -1 -51 -13 -103 -28 -52 -15 -99 -28 -105 -29 -25 -4
                        -154 -63 -195 -88 -25 -16 -53 -31 -62 -34 -10 -4 -18 -10 -18 -15 0 -5 -5 -9
                        -12 -9 -12 0 -106 -68 -148 -108 -14 -13 -37 -30 -52 -39 -14 -9 -32 -27 -39
                        -40 -7 -13 -15 -23 -19 -23 -10 0 -63 -50 -53 -50 4 -1 -1 -9 -13 -18 -12 -10
                        -26 -28 -33 -40 -7 -13 -17 -19 -23 -16 -6 4 -8 3 -5 -3 4 -6 -6 -25 -22 -42
                        -16 -17 -26 -31 -23 -31 4 0 0 -6 -9 -13 -8 -7 -26 -34 -39 -61 -14 -26 -31
                        -53 -40 -60 -8 -6 -16 -18 -18 -26 -2 -8 -8 -16 -13 -18 -5 -2 -9 -12 -9 -23
                        0 -10 -4 -19 -9 -19 -5 0 -14 -15 -21 -32 -8 -18 -20 -41 -28 -50 -8 -10 -11
                        -18 -7 -18 4 0 0 -9 -10 -20 -10 -11 -15 -20 -11 -20 4 0 0 -10 -8 -22 -9 -12
                        -16 -30 -16 -40 0 -10 -4 -18 -10 -18 -5 0 -10 -5 -10 -10 0 -6 -7 -27 -16
                        -48 -10 -20 -18 -41 -20 -47 -23 -74 -55 -160 -61 -164 -5 -3 -8 -10 -9 -16
                        -1 -33 -18 -84 -25 -79 -5 3 -6 -2 -3 -10 3 -8 0 -24 -6 -37 -7 -12 -14 -36
                        -17 -53 -3 -17 -10 -40 -16 -51 -6 -11 -11 -33 -13 -49 -1 -16 -6 -31 -10 -35
                        -5 -3 -9 -10 -10 -16 -2 -33 -18 -96 -25 -101 -4 -2 -6 -11 -2 -19 3 -8 0 -15
                        -7 -15 -6 0 -8 -4 -5 -10 3 -5 1 -10 -5 -10 -6 0 -9 -4 -6 -9 3 -5 -3 -44 -15
                        -87 -11 -44 -23 -89 -26 -101 -3 -13 -9 -23 -13 -23 -5 0 -7 -8 -5 -17 1 -10
                        -4 -33 -11 -52 -8 -18 -14 -42 -14 -52 0 -11 -8 -38 -19 -62 -10 -23 -24 -62
                        -30 -85 -7 -24 -21 -60 -33 -80 -11 -20 -22 -45 -24 -56 -2 -12 -8 -22 -14
                        -24 -6 -2 -8 -8 -4 -13 3 -5 0 -9 -5 -9 -6 0 -10 -3 -9 -7 2 -9 -31 -75 -41
                        -83 -4 -3 -11 -16 -17 -30 -16 -36 -56 -82 -161 -187 -51 -51 -99 -93 -108
                        -93 -9 0 -14 -4 -11 -9 3 -5 -11 -20 -31 -33 -20 -12 -55 -35 -77 -50 -62 -41
                        -134 -81 -142 -78 -4 1 -10 -2 -13 -7 -12 -16 -121 -77 -121 -68 0 4 -21 -5
                        -47 -19 -44 -22 -90 -40 -103 -38 -3 0 -11 -4 -17 -10 -7 -6 -13 -7 -13 -2 0
                        5 -4 4 -8 -3 -7 -12 -69 -36 -217 -84 -49 -17 -99 -34 -110 -40 -12 -6 -30
                        -12 -40 -14 -11 -2 -21 -4 -22 -5 -2 -2 -11 -3 -20 -4 -10 -1 -23 -5 -30 -9
                        -17 -11 -112 -22 -177 -21 -47 2 -66 8 -100 31 -22 16 -42 36 -42 44 -1 7 -3
                        16 -4 19 -1 3 -4 17 -6 32 -5 31 65 230 78 222 5 -3 7 -2 6 3 -3 10 25 73 33
                        73 3 0 16 22 29 50 13 27 26 48 28 45 3 -2 12 9 21 25 9 17 29 47 46 68 40 51
                        294 301 326 321 14 9 40 33 58 53 18 21 39 38 46 38 8 0 17 5 21 12 5 7 2 9
                        -7 4 -8 -5 11 16 42 46 30 29 58 61 62 71 4 10 11 15 17 12 5 -3 10 1 10 9 0
                        9 5 16 10 16 6 0 10 5 10 11 0 17 37 59 45 51 3 -4 5 -2 4 3 -5 17 12 56 22
                        50 5 -3 6 1 3 9 -3 9 -1 16 5 16 6 0 10 3 9 8 -1 4 3 17 10 30 7 12 9 22 5 22
                        -4 0 1 7 11 15 11 8 17 15 13 15 -3 0 0 21 8 47 8 25 12 50 9 54 -2 4 -1 10 4
                        13 4 2 9 40 10 83 2 65 -2 107 -22 198 -4 20 -51 110 -61 117 -5 4 -7 8 -3 8
                        3 0 -8 15 -25 33 -18 18 -36 33 -42 33 -5 -1 -9 5 -7 12 1 8 -2 11 -9 6 -7 -4
                        -18 1 -25 10 -7 10 -15 17 -18 16 -4 -1 -28 8 -54 20 -26 12 -56 26 -67 30
                        -87 38 -115 51 -120 60 -4 6 -11 8 -16 5 -5 -4 -9 -2 -9 3 0 5 -6 9 -12 9 -16
                        0 -152 66 -156 75 -2 4 -10 4 -19 1 -12 -5 -14 -3 -8 7 5 8 3 11 -6 8 -7 -2
                        -25 1 -39 9 -24 12 -25 11 -33 -20 -4 -17 -12 -40 -18 -50 -5 -10 -7 -22 -4
                        -27 4 -6 1 -10 -4 -10 -6 0 -10 -3 -10 -7 1 -5 0 -11 -1 -15 -1 -5 -4 -12 -5
                        -18 -1 -5 -3 -11 -5 -12 -1 -2 -3 -11 -5 -20 -6 -30 -27 -93 -36 -103 -4 -6
                        -10 -22 -13 -35 -8 -38 -14 -60 -30 -113 l-15 -48 27 -11 c15 -6 29 -12 32
                        -13 20 -7 46 -20 50 -25 3 -3 21 -14 41 -23 20 -9 42 -23 49 -32 7 -8 18 -15
                        25 -15 16 0 55 -34 55 -48 0 -6 -8 -16 -17 -21 -10 -6 -15 -11 -10 -11 4 0
                        -22 -30 -58 -66 -36 -36 -65 -69 -65 -73 0 -3 -14 -15 -30 -26 -16 -11 -30
                        -24 -30 -29 0 -9 -51 -59 -96 -95 -15 -12 -23 -21 -18 -21 5 0 -13 -20 -40
                        -45 -27 -25 -53 -45 -58 -45 -4 0 -8 -4 -8 -9 0 -12 -62 -75 -75 -76 -5 -1 -9
                        -6 -8 -13 2 -7 -4 -12 -12 -12 -8 0 -15 -6 -15 -14 0 -8 -9 -18 -20 -21 -11
                        -4 -18 -10 -15 -15 2 -4 -19 -29 -48 -56 -28 -27 -51 -51 -50 -54 1 -3 -12
                        -21 -29 -40 -16 -19 -26 -29 -22 -21 5 9 3 12 -4 7 -7 -4 -12 -13 -12 -19 0
                        -7 -14 -28 -32 -47 -18 -19 -33 -41 -34 -49 -2 -8 -10 -18 -18 -23 -9 -5 -16
                        -14 -16 -19 0 -11 -51 -82 -63 -87 -4 -2 -5 -8 -1 -13 3 -5 -8 -21 -23 -36
                        -15 -14 -23 -23 -17 -20 7 4 -5 -28 -26 -71 -57 -115 -80 -170 -80 -186 0 -8
                        -4 -17 -9 -20 -5 -4 -8 -14 -6 -24 1 -9 -2 -28 -7 -42 -28 -72 -42 -302 -23
                        -380 21 -88 27 -117 28 -137 1 -12 4 -19 6 -17 4 4 29 -57 35 -85 1 -8 8 -17
                        14 -19 7 -2 12 -8 12 -14 0 -15 91 -148 102 -148 5 0 6 -4 3 -10 -3 -5 -2 -10
                        4 -10 15 0 66 -51 63 -62 -1 -5 2 -7 7 -4 5 4 25 -7 44 -24 19 -16 38 -30 43
                        -30 4 0 16 -8 27 -18 11 -9 17 -11 13 -4 -4 6 9 2 29 -9 20 -12 39 -19 42 -15
                        3 3 12 1 20 -5 7 -6 13 -9 13 -6 0 3 19 1 43 -6 54 -15 257 -10 319 9 9 3 25
                        7 35 9 63 12 121 27 143 34 14 5 54 17 90 27 36 9 69 21 74 26 6 4 17 8 25 8
                        17 0 128 43 174 67 15 8 33 11 40 7 6 -4 9 -3 4 1 -6 8 55 44 76 45 4 0 20 9
                        36 20 15 12 37 22 49 23 12 1 22 4 22 7 0 4 20 17 45 29 25 12 45 27 45 32 0
                        5 5 9 11 9 6 0 22 9 36 20 14 11 30 17 37 13 6 -3 8 -3 4 2 -8 9 15 28 74 60
                        20 11 58 38 84 60 26 22 54 45 63 50 19 11 21 13 131 115 41 39 81 70 89 70 8
                        0 12 3 8 6 -8 8 42 62 65 70 10 3 16 9 13 14 -3 5 5 17 18 27 13 10 31 30 41
                        45 10 15 23 25 29 21 6 -3 7 -1 3 5 -4 7 -3 12 3 12 5 0 12 9 16 19 3 11 15
                        23 26 26 11 4 18 9 16 12 -6 5 16 35 52 70 13 13 21 23 17 23 -6 0 0 9 34 49
                        29 34 60 80 60 91 0 5 4 10 9 10 5 0 14 13 21 29 6 16 18 32 25 35 7 2 21 22
                        31 43 10 21 33 61 51 90 18 29 33 56 33 61 0 5 6 15 14 21 14 12 59 98 54 104
                        -2 1 7 15 20 31 12 16 22 34 22 40 0 7 5 17 12 24 6 6 13 18 14 26 1 8 16 42
                        33 76 17 33 31 67 31 76 0 9 5 12 12 8 7 -4 8 -3 4 4 -4 6 2 28 13 49 19 38
                        21 44 21 64 0 5 4 8 9 5 5 -4 7 3 4 14 -3 12 1 22 11 26 9 3 14 10 11 14 -3 4
                        7 39 21 76 14 38 29 83 34 99 14 54 44 140 50 145 3 3 6 14 8 25 2 11 9 40 17
                        65 8 25 22 70 32 100 9 30 17 57 18 60 0 3 3 10 6 15 3 6 12 31 20 58 7 26 17
                        47 21 47 4 0 8 8 8 18 0 10 4 22 10 28 5 5 11 20 13 33 2 12 8 26 13 29 12 8
                        28 43 26 55 -1 4 3 7 8 7 6 0 10 7 10 16 0 15 48 86 63 92 4 2 7 9 7 16 0 6
                        12 27 28 45 43 53 168 181 176 181 4 0 19 11 34 25 15 14 32 25 39 25 7 0 16
                        6 20 13 4 8 24 22 43 33 19 10 41 25 49 32 7 7 20 11 27 8 8 -3 14 -1 14 4 0
                        9 47 33 85 43 11 3 46 15 78 26 32 11 74 22 95 25 20 3 50 8 66 11 55 11 196
                        11 248 0 67 -15 87 -23 117 -49 14 -12 21 -14 16 -6 -5 8 5 4 20 -10 47 -40
                        65 -64 60 -78 -3 -7 0 -10 5 -7 6 3 10 3 11 -2 0 -4 3 -17 6 -28 13 -49 14
                        -164 3 -205 -7 -25 -14 -54 -16 -65 -9 -65 -15 -89 -24 -100 -5 -6 -7 -15 -3
                        -18 3 -4 1 -7 -6 -7 -6 0 -11 -6 -9 -12 3 -17 -11 -83 -27 -133 -8 -22 -16
                        -51 -19 -65 -11 -55 -15 -69 -24 -87 -5 -10 -7 -23 -5 -30 2 -7 -1 -22 -8 -35
                        -7 -13 -14 -32 -14 -43 -1 -11 -4 -27 -8 -35 -3 -8 -8 -28 -11 -45 -3 -16 -10
                        -50 -16 -75 -14 -55 -21 -94 -24 -141 -1 -19 -5 -39 -7 -45 -3 -5 -5 -40 -4
                        -79 2 -59 6 -104 19 -215 1 -8 12 -37 24 -63 12 -27 22 -53 22 -59 0 -5 14
                        -30 32 -56 18 -26 30 -47 28 -47 -3 0 28 -33 68 -73 39 -40 72 -77 72 -83 0
                        -5 4 -9 10 -9 5 0 47 -24 92 -53 46 -30 98 -60 116 -68 17 -8 32 -18 32 -22 0
                        -5 5 -5 11 -1 6 3 15 1 19 -5 6 -10 25 -15 78 -20 7 0 11 -4 9 -8 -3 -5 5 -9
                        16 -9 39 -3 82 -15 85 -25 2 -5 8 -7 13 -4 5 3 26 1 46 -4 21 -5 65 -13 98
                        -18 82 -10 467 -10 645 1 80 5 170 10 200 11 30 2 93 6 140 9 47 3 126 8 175
                        11 50 3 119 7 155 10 148 12 414 28 492 29 32 1 58 3 58 6 0 3 26 5 57 6 53 0
                        228 10 355 19 62 4 208 14 323 21 175 11 288 9 292 -3 3 -7 11 -13 19 -13 17
                        0 55 -81 60 -130 3 -19 9 -57 14 -85 5 -27 12 -72 15 -100 3 -27 7 -63 10 -80
                        2 -16 7 -55 10 -85 3 -30 8 -77 10 -105 20 -195 19 -666 -1 -684 -5 -5 -20 -4
                        -34 2 -14 5 -29 11 -35 12 -5 2 -30 8 -55 15 -25 7 -46 12 -48 11 -1 -1 -15 5
                        -31 13 -16 9 -31 12 -34 9 -4 -3 -13 -1 -20 5 -8 7 -16 10 -19 7 -2 -3 -38 3
                        -79 14 -41 10 -98 21 -128 25 -30 4 -59 10 -65 14 -6 3 -22 7 -36 8 -14 1 -49
                        7 -78 13 -29 6 -56 10 -60 9 -4 -1 -29 2 -57 6 -60 10 -94 15 -160 20 -27 2
                        -72 7 -100 11 -126 15 -513 20 -680 9 -44 -3 -101 -6 -127 -5 -28 0 -48 -4
                        -48 -10 0 -5 -4 -8 -8 -5 -5 3 -37 0 -73 -5 -35 -6 -75 -12 -89 -15 -52 -7
                        -112 -25 -153 -44 -23 -11 -51 -21 -62 -23 -31 -5 -188 -94 -221 -125 -7 -6
                        -17 -12 -23 -12 -6 0 -11 -5 -11 -12 0 -6 -3 -9 -6 -6 -7 8 -107 -95 -142
                        -147 -15 -22 -30 -42 -33 -45 -3 -3 -14 -23 -25 -45 -10 -22 -22 -43 -27 -46
                        -5 -3 -8 -9 -8 -13 2 -8 -9 -56 -16 -76 -14 -38 -20 -188 -9 -245 12 -64 15
                        -74 25 -94 6 -11 12 -31 13 -45 1 -14 4 -23 7 -21 2 3 16 -19 30 -49 28 -54
                        86 -135 108 -149 7 -4 13 -15 13 -22 0 -8 3 -14 8 -13 4 1 21 -11 37 -27 17
                        -17 43 -39 58 -50 28 -19 59 -43 85 -65 6 -6 12 -8 12 -5 0 3 20 -8 44 -25 25
                        -16 51 -30 58 -30 8 0 20 -6 26 -13 7 -6 16 -12 20 -12 18 -2 82 -27 82 -34 0
                        -4 10 -8 22 -8 13 -1 24 -7 26 -13 2 -5 7 -8 12 -5 5 3 33 -4 64 -15 30 -12
                        68 -23 83 -26 15 -3 32 -9 39 -15 6 -5 13 -7 16 -4 2 3 35 -4 72 -15 38 -10
                        71 -19 75 -18 17 3 91 -16 91 -23 0 -12 27 -11 35 1 11 18 8 556 -4 579 -7 11
                        -9 21 -6 21 3 0 -3 8 -12 18 -10 11 -21 17 -24 16 -5 -3 -41 6 -99 23 -8 2
                        -15 3 -16 1 0 -2 -9 4 -19 12 -17 13 -18 13 -10 0 7 -12 6 -13 -7 -3 -8 7 -18
                        10 -21 6 -4 -3 -7 -1 -7 6 0 8 -7 11 -15 7 -9 -3 -24 3 -35 14 -11 11 -20 17
                        -20 13 0 -4 -10 4 -22 16 -45 49 -38 120 17 171 35 33 75 60 90 60 10 0 13 5
                        9 12 -5 7 -3 8 6 3 7 -4 15 -2 19 4 4 6 22 13 39 15 17 3 35 7 39 9 5 3 35 8
                        68 11 33 4 67 9 75 11 82 21 520 21 640 -1 70 -12 97 -17 120 -19 14 -2 25 -4
                        25 -5 0 -1 16 -3 35 -5 19 -1 61 -10 93 -18 31 -8 57 -13 57 -10 0 3 6 1 13
                        -4 6 -6 37 -16 67 -23 30 -7 67 -19 81 -26 15 -7 29 -11 31 -9 7 8 68 -16 68
                        -26 0 -4 6 -6 13 -3 7 2 34 -7 60 -20 26 -14 47 -23 47 -21 0 3 17 -2 38 -10
                        114 -49 288 -93 342 -88 140 14 202 38 277 108 29 28 113 152 113 168 0 7 5
                        18 10 23 6 6 12 19 15 30 2 10 13 55 23 99 44 180 52 272 55 635 2 341 -11
                        601 -39 731 -2 13 -7 38 -9 55 -2 17 -11 58 -19 92 -8 33 -11 63 -8 66 3 3 1
                        6 -5 6 -9 0 -35 78 -32 96 0 4 -3 10 -8 13 -12 9 -57 105 -54 116 1 6 -1 7 -5
                        3 -4 -5 -17 8 -29 28 -33 55 -131 149 -205 197 -36 23 -68 45 -71 50 -3 5 -9
                        8 -13 8 -20 -3 -26 0 -21 9 3 5 0 7 -8 4 -8 -3 -19 2 -26 10 -7 8 -20 12 -28
                        9 -12 -5 -14 -3 -8 7 5 9 4 11 -4 6 -6 -4 -23 -1 -36 8 -13 9 -31 16 -40 16
                        -9 0 -44 9 -78 20 -34 10 -89 24 -122 31 -33 6 -74 16 -92 21 -17 5 -56 11
                        -85 14 -51 4 -73 8 -128 21 -14 4 -40 7 -57 7 -18 0 -33 3 -33 7 0 3 -17 6
                        -37 7 -21 0 -67 4 -103 8 -147 15 -445 9 -492 -11 -9 -4 -22 -4 -28 0 -5 3
                        -10 2 -10 -2 0 -5 -16 -10 -36 -11 -20 -2 -45 -7 -54 -12 -9 -5 -28 -11 -41
                        -14 -13 -3 -55 -15 -94 -27 -38 -11 -83 -25 -100 -30 -16 -5 -77 -24 -134 -44
                        -58 -19 -107 -33 -109 -30 -3 2 -14 -1 -26 -8 -11 -6 -30 -13 -41 -15 -11 -2
                        -29 -4 -40 -6 -11 -2 -27 -6 -35 -9 -54 -22 -292 -40 -443 -34 -144 6 -262 14
                        -262 17 0 1 -31 4 -70 6 -38 3 -77 8 -85 11 -17 6 -37 10 -100 17 -25 3 -64
                        10 -87 14 -24 5 -43 7 -43 4 0 -2 -6 0 -12 5 -7 5 -29 10 -48 12 -19 2 -43 10
                        -52 18 -9 8 -22 12 -27 8 -6 -3 -38 20 -70 52 -50 50 -60 67 -70 114 -6 30
                        -11 79 -11 109 0 30 0 68 0 84 -1 37 21 136 29 136 4 0 8 9 9 20 4 42 6 50 11
                        50 4 0 8 12 9 26 1 15 12 43 24 63 13 20 22 39 20 44 -1 4 2 7 6 7 4 0 8 10 9
                        21 1 12 9 29 17 38 8 9 14 18 14 21 -2 13 27 80 35 80 4 0 6 4 3 8 -3 5 4 19
                        14 30 11 12 19 25 18 29 0 4 5 22 12 38 7 17 14 32 15 35 0 3 11 27 24 54 28
                        60 71 189 79 236 3 19 6 78 6 130 0 75 -5 110 -24 165 -13 39 -27 72 -30 75
                        -3 3 -16 21 -28 41 -37 60 -180 188 -230 203 -12 4 -22 11 -22 16 0 5 -20 16
                        -45 26 -25 9 -45 20 -45 25 0 5 -7 6 -15 3 -8 -4 -15 -1 -15 5 0 6 -7 11 -15
                        11 -8 0 -29 8 -47 18 -18 10 -39 17 -47 14 -9 -3 -11 0 -6 8 5 9 4 11 -3 6 -6
                        -4 -22 -1 -34 6 -13 6 -27 13 -33 13 -20 2 -69 18 -94 31 -13 7 -28 11 -33 8
                        -4 -3 -8 -1 -8 5 0 5 -8 9 -17 9 -10 0 -61 11 -113 25 -52 14 -124 29 -160 33
                        -57 7 -246 12 -267 7z"/>
                        </g>
                        </svg>
                    <div className="col-2"></div>
                    <div className="col-2 d-flex flex-column align-items-end alto-35" >
                        <img className="ancho-10" src="static/Elementosporseparado/13 Juegos de atenci??n/monito.png" alt="img"/>
                        <img onClick={()=>handleClickStart(true)} className="ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atenci??n/comienzo-violeta.png" alt="img"/>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3 d-flex align-items-end ">
                        <img className=" ancho-10 img-hover adelante-2" src="static/Elementosporseparado/13 Juegos de atenci??n/bananas.png" id="llegada" alt="img"/>
                        <img className=" ancho-10" src="static/Elementosporseparado/13 Juegos de atenci??n/llegada-violeta.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </>
    )
}