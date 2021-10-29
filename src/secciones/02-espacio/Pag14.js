import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag14 = ({playBad, playGood}) => {

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
        <div className="row">
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row adelante">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/14.png" alt="pag-14"/> 
                <div>
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                    
                    
                    <div className="d-flex flex-column position-absolute top-50 end-0 translate-middle-y px-4 px-md-5 pt-5">
                        <p className="btn btn-primary letra-titulo my-lg-4" style={{fontSize:"1.5vw"}} onClick={()=>{handleClickWrong()}}>DELANTE DE LA CANASTA</p>
                        <p className="btn btn-warning letra-titulo my-lg-4" style={{fontSize:"1.5vw"}} onClick={()=>{handleClickWrong()}}>AL COSTADO DE LA CANASTA</p>
                        <p className="btn btn-success letra-titulo my-lg-4" style={{fontSize:"1.5vw"}} onClick={()=>{handleClickTrue()}}>DENTRO DE LA CANASTA</p>
                        <p className="btn btn-danger letra-titulo my-lg-4" style={{fontSize:"1.5vw"}} onClick={()=>{handleClickWrong()}}>BAJO DE LA CANASTA</p>                     
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}
