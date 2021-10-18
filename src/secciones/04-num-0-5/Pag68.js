import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag68 = ({playBad, playGood}) => {

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
                <img className="position-absolute p-0" src="static/Diapositivas PNG/68.png" alt="pag-14"/> 
                <div>
                    <div className="d-flex flex-column position-absolute top-50 end-0 translate-middle-y mx-3 " style={{zIndex:1}}>
                        <div className="img-hover btn-success p-1 p-lg-4 m-2 rounded-circle" onClick={()=>{handleClickWrong()}}><h3 style={{fontSize:"5vw"}}>4</h3></div>
                        <div className="img-hover btn-success p-1 p-lg-4 m-2 rounded-circle" onClick={()=>{handleClickTrue()}}><h3 style={{fontSize:"5vw"}}>2</h3></div>
                        <div className="img-hover btn-success p-1 p-lg-4 m-2 rounded-circle" onClick={()=>{handleClickWrong()}}><h3 style={{fontSize:"5vw"}}>3</h3></div>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}
