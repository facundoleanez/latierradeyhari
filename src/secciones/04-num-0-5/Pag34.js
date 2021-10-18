import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag34 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false])
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);


    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad();
    }

    const handleSelect = (i) => {
      setIsSelected((prevState) => prevState.map((item,index) => {
          setGood(true);
          playGood();
          if (index === i) {
              return true
          }
          return item
      }))
    };

    useEffect(() => {
        if (isSelected.every(elem => elem )){
            setCompleted(true)
        }
    }, [isSelected])

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
                <div className="row" style={{height:"5vw"}} ></div>
                <img className="position-absolute p-0" src="static/Diapositivas PNG/34.png" alt="pag-19"/> 
                <div className="col-8" style={{zIndex:2}}>
                    <div className="mt-3 p-2" >
                       <img className={`img-hover ${isSelected[0]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleSelect(0)}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/abeja-y-0.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/1-nene.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/5-peces.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/cisne-2.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/pecera-vacia.png" alt="img"/>
                       <img className={`img-hover ${isSelected[1]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleSelect(1)}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/0-amarillo.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/reloj.png" alt="img"/>
                       <img className={`img-hover ${isSelected[2]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleSelect(2)}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/sapo-y-0.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/peter.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2-autos.png" alt="img"/>
                       <img className={`img-hover ${isSelected[3]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleSelect(3)}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/hada-y-0.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/1-chanchito.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/duendecita.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}