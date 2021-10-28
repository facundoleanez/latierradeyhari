import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag119 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/119.png" alt="pag-19"/> 
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></>}
                <div className="col-8"></div>
                <div className="col-4 adelante d-flex flex-column text-center justify-content-center" style={{height:"85vh"}}>
                    <div className="img-hover p-3" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"10vw"}} src="static/Elementosporseparado/10 Números del 6 al 10/5-rosa.png" alt="img"/>
                    </div>
                    <div className="img-hover p-3" onClick={()=>{handleClickTrue()}}>
                        <img style={{height:"10vw"}} src="static/Elementosporseparado/10 Números del 6 al 10/7-rosa.png" alt="img"/>
                    </div>
                    <div className="img-hover p-3" onClick={()=>{handleClickWrong()}}>
                        <img style={{height:"10vw"}} src="static/Elementosporseparado/10 Números del 6 al 10/6-rosa.png" alt="img"/>
                    </div>
                </div>
                
            </div> 
             }
        </div>
    )
}