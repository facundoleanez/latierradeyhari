import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag37 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/37.png" alt="pag-19"/> 
                <div className="row alto-12"></div>
                <div className="col-5"></div>
                <div className="col-6 p-0 d-flex justify-content-around adelante">
                    <div className="bg-amarillo border border-dark img-hover" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"30vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/arbol-con-manzanas.png" alt="img"/>
                    </div>
                    <div className="bg-amarillo border border-dark img-hover" onClick={()=>{handleClickTrue()}}>
                        <img style={{height:"30vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/arbol-sin-manzanas.png" alt="img"/>
                    </div>
                </div>
                <div className="col-1"></div>
                
            </div> 
             }
        </div>
    )
}