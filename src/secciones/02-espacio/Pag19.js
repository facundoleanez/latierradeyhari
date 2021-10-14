import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag19 = () => {

    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

    const handleClickTrue = () => {
        setCompleted(true);
        setGood(true);
        setWrong(false)
    }
    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/19.png" alt="pag-19"/> 
                <div className="">
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                    
                    
                    <div className="d-flex flex-column position-absolute top-50 end-0 translate-middle-y mx-3 " style={{zIndex:1}}>
                        <p className="btn btn-primary" style={{fontSize:"1.3vw"}} onClick={()=>{handleClickWrong()}}>ARRIBA DE LOS ARBOLES</p>
                        <p className="btn btn-warning" style={{fontSize:"1.3vw"}} onClick={()=>{handleClickWrong()}}>DENTRO DE LOS ARBOLES</p>
                        <p className="btn btn-success" style={{fontSize:"1.3vw"}} onClick={()=>{handleClickTrue()}}>EN EL MEDIO <br/>DE LOS ARBOLES</p>
                        <p className="btn btn-danger" style={{fontSize:"1.3vw"}} onClick={()=>{handleClickWrong()}}>AL LADO IZQUIERDO <br/> DE LOS ARBOLES</p>                     
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}