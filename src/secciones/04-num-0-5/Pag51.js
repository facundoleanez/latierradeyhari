import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag51 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/51.png" alt="pag-19"/> 
                <div className="">
                    <div className="d-flex position-absolute top-50 start-0 translate-middle-y mx-3 " style={{zIndex:1}}>
                        <div className="bg-amarillo border border-dark p-3 m-lg-3 m-2 img-hover" onClick={()=>{handleClickWrong()}}>
                            <img style={{height:"16vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/1-chanchito.png" alt="img"/>
                        </div>
                        <div className="bg-amarillo border border-dark p-3 m-lg-3 m-2 img-hover" onClick={()=>{handleClickTrue()}}>
                            <img style={{height:"17vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/3-chanchitos.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}