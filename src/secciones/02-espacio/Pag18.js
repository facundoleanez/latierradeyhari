import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag18 = ({playBad, playGood}) => {

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
        <div className="row ">
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/18.png" alt="pag-18"/> 
                <div>
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                    
                    
                    <div className="d-flex flex-column position-absolute top-50 end-0 translate-middle-y px-4 px-md-5 pt-5" style={{zIndex:1}}>
                        <p className="btn btn-primary letra-titulo my-md-4" style={{fontSize:"1.8vw"}} onClick={()=>{handleClickWrong()}}>ARRIBA DE LA CARPA</p>
                        <p className="btn btn-warning letra-titulo my-md-4" style={{fontSize:"1.8vw"}} onClick={()=>{handleClickWrong()}}>DENTRO DE LA CARPA</p>
                        <p className="btn btn-success letra-titulo my-md-4" style={{fontSize:"1.8vw"}} onClick={()=>{handleClickWrong()}}>DEBAJO DE LA CARPA</p>
                        <p className="btn btn-danger letra-titulo my-md-4" style={{fontSize:"1.8vw"}} onClick={()=>{handleClickTrue()}}>AL LADO IZQUIERDO <br/> DE LA CARPA</p>                     
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}