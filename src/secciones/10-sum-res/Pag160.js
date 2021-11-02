import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag160 = ({playBad, playGood}) => {

    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [turnOff, setTurnOff] = useState(false);


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
    const handleClickTurnOff = () => {
        setTurnOff(true)
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
        <>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/160.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="col-3 adelante d-flex flex-column justify-content-around alto-libro align-items-center">
                    <img className="img-hover ancho-10" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/12 Suma y resta/1-naranja.png" alt="img"/>
                    <img className={`img-hover ancho-10 ${good ? "animate__animated animate__rotateIn" : ""}`} onClick={()=>{handleClickTrue()}} src="static/Elementosporseparado/12 Suma y resta/3-naranja.png" alt="img"/>
                    <img className="img-hover ancho-10" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/12 Suma y resta/7-naranja.png" alt="img"/>
                </div>
                <div className="col-5 adelante text-center">
                    <div className="alto-25 my-3"></div>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"}  src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"}  src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/mariposa.png" alt="img"/>
                </div>
                {
                    good &&
                    <div className="col-1 adelante d-flex flex-column justify-content-center">
                        <img className="img-hover ancho-10" src="static/Elementosporseparado/12 Suma y resta/3-naranja.png" alt="img"/>
                    </div>
                    
                }
            </div> 
             }
        </>
    )
}