import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag145 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/145.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="row alto-15"></div>

                <div className="col-2"></div>
                <div className="col-10 row justify-content-evenly">
                    <div className="col-3 bg-amarillo adelante border border-dark  img-hover" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"18vw"}} src="static/Elementosporseparado/11 Nocion de cantidad/vaso-vacio.png" alt="img"/>
                    </div>
                    <div className="col-3 bg-amarillo adelante border border-dark  img-hover" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"18vw"}} src="static/Elementosporseparado/11 Nocion de cantidad/vaso-lleno.png" alt="img"/>
                    </div>
                    <div className="col-3 bg-amarillo adelante border border-dark  img-hover" onClick={()=>{handleClickTrue()}}>
                        <img style={{height:"18vw"}} src="static/Elementosporseparado/11 Nocion de cantidad/vaso-c-un-poco-de-agua.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}