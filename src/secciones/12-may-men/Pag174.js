import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Pag174 = ({playBad, playGood}) => {
    
    const [isSelected, setIsSelected] = useState([false, false])
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);


    const handleClickTrue = (i) => {
        setIsSelected((prevState) => prevState.map((item,index) => {
            setGood(true);
            playGood();
            if (index === i) {
                return true
            }
            return item
        }))
    };

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
            <div className="row">
                <img className="position-absolute p-0" src="static/Diapositivas PNG/173.png" alt="pag-19"/> 
                { good ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                { wrong ? <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                <div className="alto-15"></div>
                <div className="col-3 adelante text-center">
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/4-violeta.png" alt="img"/>
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/5-rojo.png" alt="img"/>
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickTrue(0)}} src="static/Elementosporseparado/10 Números del 6 al 10/1-celeste.png" alt="img"/>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center adelante">
                    {isSelected[0] && <img className="ancho-10 img-hover m-2" src="static/Elementosporseparado/10 Números del 6 al 10/estrella-4.png" alt="img"/> }
                    <img className="ancho-10 img-hover m-2" src="static/Elementosporseparado/10 Números del 6 al 10/estrella-10.png" alt="img"/>
                    {isSelected[1] && <img className="ancho-10 img-hover m-2" src="static/Elementosporseparado/10 Números del 6 al 10/estrella-11.png" alt="img"/> }
                </div>
                <div className="col-3 adelante text-center">
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/7-violeta.png" alt="img"/>
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickTrue(1)}} src="static/Elementosporseparado/10 Números del 6 al 10/3-verde.png" alt="img"/>
                    <img className="ancho-10 img-hover  m-lg-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/6-fucsia.png" alt="img"/>
                </div>
            </div> 
             
        </>
    )
}