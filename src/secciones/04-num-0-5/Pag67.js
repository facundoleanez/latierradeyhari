import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag67 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/67.png" alt="pag-14"/> 
                <div className="ancho-5"></div>
                <div className="col-2 d-flex flex-column adelante text-center justify-content-around" style={{height:"85vh"}}>
                    <div className="img-hover btn-success p-2 p-lg-4 m-2 rounded-circle fuente-1 ancho-10 alto-10" onClick={()=>{handleClickWrong()}}><h3 style={{fontSize:"5vw"}}>2</h3></div>
                    <div className="img-hover btn-success p-2 p-lg-4 m-2 rounded-circle fuente-1 ancho-10 alto-10" onClick={()=>{handleClickWrong()}}><h3 style={{fontSize:"5vw"}}>3</h3></div>
                    <div className="img-hover btn-success p-2 p-lg-4 m-2 rounded-circle fuente-1 ancho-10 alto-10" onClick={()=>{handleClickTrue()}}><h3 style={{fontSize:"5vw"}}>4</h3></div>
                </div>
            </div> 
             }
        </div>
    )
}
