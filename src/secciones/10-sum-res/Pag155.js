import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag155 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/155.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="col-4"></div>
                <div className="col-5 adelante text-center">
                    <div className="alto-22"></div>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/nube-azul.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/nube-blanca.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/nube-azul.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/nube-blanca.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/nube-azul.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/nube-blanca.png" alt="img"/>
                    <img className={turnOff ? "d-none" : "img-hover ancho-5 m-lg-3 m-1"} onClick={()=>{handleClickTurnOff()}} src="static/Elementosporseparado/12 Suma y resta/nube-azul.png" alt="img"/>
                    <img className="img-hover ancho-5 m-lg-3 m-1" src="static/Elementosporseparado/12 Suma y resta/nube-blanca.png" alt="img"/>

                </div>
                <div className="col-1"></div>
                <div className="col-2 adelante d-flex flex-column justify-content-around alto-libro">
                    <img className={`img-hover ancho-10 ${good ? "animate__animated animate__rotateIn" : ""}`} onClick={()=>{handleClickTrue()}} src="static/Elementosporseparado/12 Suma y resta/4-celeste.png" alt="img"/>
                    <img className="img-hover ancho-10" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/12 Suma y resta/1-celeste.png" alt="img"/>
                    <img className="img-hover ancho-10" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/12 Suma y resta/6-celeste.png" alt="img"/>
                </div>
            </div> 
             }
        </>
    )
}