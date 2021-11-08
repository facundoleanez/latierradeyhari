// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import { BienHecho } from '../../components/BienHecho'


// export const Pag164 = ({playBad, playGood}) => {

//     const [inside, setInside] = useState(false)
//     const [completed, setCompleted] = useState(false);
//     const [good, setGood] = useState(false);
//     const [wrong, setWrong] = useState(false);


//     const handleHover = ()=>{
//         setInside(true)
//     }

//     const handleHoverOut = ()=>{
//         setInside(false)
//     }

//     useEffect(() => {
//         if (inside) {
//             setGood(true)
//             playGood()
            
//         } else {
//             setWrong(true)
//             setGood(false)
//             playBad();
//         }
//     }, [inside])


//     useEffect(() => {
//         if (wrong) {
//             const timeOut = setTimeout(()=>setWrong(false), 1000)
//             return () => {
//                 clearTimeout(timeOut)
//             }
//         }
//     }, [wrong])

//     return (
//         <>
//             { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
//             <div className="row">
//                 <img className="position-absolute p-0" src="static/Diapositivas PNG/164.png" alt="pag-19"/> 
//                 { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
//                 { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
//                 <div className="alto-10"></div>
//                 <div className="col-8 adelante border">
//                     <svg className="img-hover alto-25"  version="1.0" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1013.000000 466.000000"
//                     preserveAspectRatio="xMidYMid meet">
//                     <metadata>
//                     Created by potrace 1.16, written by Peter Selinger 2001-2019
//                     </metadata>
//                     <g transform="translate(0.000000,466.000000) scale(0.100000,-0.100000)"
//                     fill="#ffd300" stroke="none">
//                     <path onMouseOver={()=> handleHover()}  onMouseOut={()=> handleHoverOut()} d="M6347 4514 c-3 -3 -88 -13 -115 -13 -15 -1 -21 -5 -16 -13 4 -7 3 -8
//                     -4 -4 -31 19 -133 -68 -154 -130 -14 -43 -16 -152 -4 -289 3 -44 8 -112 11
//                     -151 9 -139 68 -239 173 -297 17 -10 32 -16 32 -12 0 3 10 -1 23 -9 31 -20
//                     104 -39 192 -50 22 -3 74 -10 115 -16 41 -6 100 -13 130 -15 30 -2 73 -7 95
//                     -10 89 -13 86 -13 338 -31 153 -10 367 -14 858 -16 420 0 487 -3 562 -19 48
//                     -10 98 -25 112 -35 14 -9 25 -13 25 -9 0 3 7 -1 16 -9 8 -9 22 -16 30 -16 32
//                     0 171 -138 203 -201 12 -24 26 -51 31 -59 18 -32 40 -89 40 -105 0 -9 5 -26
//                     11 -37 6 -11 12 -30 14 -42 7 -54 17 -125 25 -171 11 -62 18 -193 26 -545 11
//                     -408 8 -587 -10 -685 -2 -11 -7 -42 -10 -68 -16 -107 -38 -182 -77 -259 -16
//                     -32 -27 -58 -25 -58 2 0 -28 -34 -69 -75 -40 -41 -80 -75 -89 -75 -10 0 -31
//                     -8 -49 -17 -18 -9 -41 -19 -52 -21 -36 -9 -1224 -1 -2285 13 -314 5 -806 10
//                     -1870 20 -245 2 -674 7 -955 10 -756 8 -1296 14 -2005 20 -349 4 -745 8 -880
//                     10 -269 4 -533 6 -567 5 -24 0 -24 -3 -8 -225 5 -75 8 -120 20 -270 3 -33 7
//                     -96 10 -139 3 -44 9 -84 14 -90 13 -16 103 -43 181 -56 36 -5 76 -12 90 -15
//                     78 -16 200 -27 440 -40 125 -7 955 -18 1360 -18 373 0 601 3 1085 18 104 3
//                     338 14 440 20 39 2 138 7 220 11 228 10 435 20 560 29 246 16 396 25 545 30
//                     58 3 148 7 200 9 144 8 323 16 435 21 55 2 183 7 285 12 102 4 446 7 765 8
//                     626 0 874 -7 1487 -40 150 -8 394 -34 473 -51 11 -3 38 -7 60 -10 22 -2 46 -7
//                     53 -9 18 -6 205 -34 272 -41 30 -3 80 -8 110 -13 82 -10 259 -4 303 12 21 8
//                     46 20 55 28 10 8 22 17 27 19 6 3 9 9 7 13 -1 5 2 6 7 3 11 -7 61 65 78 113
//                     21 59 41 170 48 261 3 47 8 112 10 145 3 33 7 101 10 150 3 50 7 115 10 145 7
//                     75 16 219 20 310 2 41 6 107 9 145 3 39 8 104 11 145 5 73 9 137 20 290 3 41
//                     8 109 10 150 3 41 7 100 10 130 3 30 7 91 10 135 3 44 7 87 10 95 2 8 7 42 9
//                     75 3 33 7 83 10 110 3 28 8 88 12 135 3 47 8 108 10 135 6 72 6 348 0 425 -11
//                     148 -26 230 -58 336 -25 80 -52 125 -109 182 -52 51 -194 132 -231 132 -9 0
//                     -20 5 -23 11 -4 5 -12 8 -18 6 -7 -2 -28 2 -47 9 -38 14 -154 33 -240 38 -30
//                     2 -82 6 -115 9 -64 7 -193 15 -315 22 -90 5 -222 15 -270 20 -19 2 -62 6 -95
//                     9 -153 14 -190 18 -195 21 -3 2 -44 9 -90 15 -47 7 -96 14 -110 16 -27 4 -224
//                     32 -277 38 -18 3 -36 7 -41 10 -10 6 -99 19 -129 18 -13 0 -23 4 -23 9 0 5
//                     -13 9 -29 9 -16 0 -41 4 -55 10 -14 5 -43 11 -66 14 -22 3 -43 7 -48 9 -4 3
//                     -25 8 -46 11 -22 4 -58 13 -80 20 -23 8 -77 24 -121 36 -44 12 -113 33 -154
//                     46 -40 14 -76 23 -79 20 -3 -3 -10 -2 -16 3 -19 15 -185 59 -281 76 -50 8
//                     -253 24 -258 19z"/>
//                     </g>
//                     </svg>

//                 </div>
//             </div> 
//              }
//         </>
//     )
// }