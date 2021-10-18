import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag41 = ({playBad, playGood}) => {

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
                                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></>}
                <img className="position-absolute p-0" src="static/Diapositivas PNG/41.png" alt="pag-19"/> 
                <div className="">
                    <div className="d-flex position-absolute top-50 start-0 translate-middle-y mx-3 " >
                        <div className="bg-amarillo border border-dark p-3 m-lg-3 m-1 img-hover" onClick={()=>{handleClickTrue()}}>
                            <img style={{height:"14vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/1-nene.png" alt="img"/>
                        </div>
                        <div className="bg-amarillo border border-dark p-3 m-lg-3 m-1 img-hover" onClick={()=>{handleClickWrong()}}>
                            <img style={{height:"12vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2-nenes.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}