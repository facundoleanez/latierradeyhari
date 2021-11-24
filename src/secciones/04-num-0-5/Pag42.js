import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag42 = ({playBad, playGood}) => {

    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

    const handleClickTrue = () => {
        setCompleted(true);
        setGood(true);
        setWrong(false);
        playGood()
    }
    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad()
    }
    useEffect(() => {
        if (wrong) {
            const timeOut = setTimeout(()=>setWrong(false), 1000)
            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [wrong])

    return (
        <div>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row">
                                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></>}
                <img className="position-absolute p-0" src="static/Diapositivas PNG/42.png" alt="pag-19"/> 
                <div className="alto-15"></div>
                <div className="ancho-5"></div>
                <div className="col-5  d-flex justify-content-around adelante">
                    <div className="bg-amarillo border border-dark p-3 p-lg-5 m-lg-3 m-2 img-hover" onClick={()=>{handleClickTrue()}}>
                        <img style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/abeja.png" alt="img"/>
                    </div>
                    <div className="bg-amarillo border border-dark p-3 p-lg-5 m-lg-3 m-2 img-hover" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"12vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/panal-y-abejas.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}