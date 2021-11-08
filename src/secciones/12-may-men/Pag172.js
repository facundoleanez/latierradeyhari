import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag172 = ({playBad, playGood}) => {

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
        <>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/172.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-15"></div>
                <div className="col-3"></div>
                <div className="col-2 adelante">
                    {good && <img className="alto-10 border border-dark" src="static/Elementosporseparado/igual.png" alt="img"/> }
                </div>
                <div className="col-2"></div>
                <div className="col-4 adelante d-flex flex-column align-items-center">
                    <img className="ancho-10 img-hover border border-dark m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/menor.png" alt="img"/>
                    <img className="ancho-10 img-hover border border-dark m-2" onClick={()=>{handleClickTrue()}} src="static/Elementosporseparado/igual.png" alt="img"/>
                    <img className="ancho-10 img-hover border border-dark m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/mayor.png" alt="img"/>
                </div>
            </div> 
             }
        </>
    )
}