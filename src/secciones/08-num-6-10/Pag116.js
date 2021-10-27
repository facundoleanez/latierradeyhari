import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag116 = ({playBad, playGood}) => {

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
            <div className="row text-center">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/115.png" alt="pag-19"/> 
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></>}
                <div className="row" style={{height:"12vw"}}></div>
                <div className="row justify-content-evenly">
                    <div className="col-4 bg-amarillo adelante border border-dark p-2 m-lg-3 m-1 img-hover" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"20vw"}} src="static/Elementosporseparado/10 Números del 6 al 10/abejas.png" alt="img"/>
                    </div>
                    <div className="col-4 bg-amarillo adelante border border-dark p-2 m-lg-3 m-1 img-hover" onClick={()=>{handleClickTrue()}}>
                        <img style={{height:"27vw"}} src="static/Elementosporseparado/10 Números del 6 al 10/patitos.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}