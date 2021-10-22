import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag54 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false])
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
        <div>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) : 
            <div className="row">
                    { good ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></> }
                    { wrong ? <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/> : <></>}
                <div className="row" style={{height:"10vw"}} ></div>
                <img className="position-absolute p-0" src="static/Diapositivas PNG/54.png" alt="pag-19"/> 
                <div className="col-5"></div>
                <div className="col-7" style={{zIndex:2}}>
                    <div className="p-3" >
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"11vw"}} src="static/Elementosporseparado/4 Formas geométricas/amarillo.png" alt="img"/>
                       <img className={`img-hover ${isSelected[0]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(0)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-y-nena.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"11vw"}} src="static/Elementosporseparado/4 Formas geométricas/canasto-basura.png" alt="img"/>
                       <img className={`img-hover ${isSelected[1]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(1)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-y-cubo.png" alt="img"/>
                       <img className={`img-hover ${isSelected[3]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(3)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-en-maceta.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/4 Formas geométricas/carpa.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"11vw"}} src="static/Elementosporseparado/4 Formas geométricas/celular.png" alt="img"/>
                       <img className={`img-hover ${isSelected[4]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(4)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-en-forma-de-mono.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"8vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-personaje.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"11vw"}} src="static/Elementosporseparado/4 Formas geométricas/cono-helado.png" alt="img"/>
                       <img className={`img-hover ${isSelected[2]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(2)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-rojo-y-blanco.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"11vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado.png" alt="img"/>
                       <img className={`img-hover ${isSelected[5]? "animate__animated animate__zoomInDown selected" : ""}`} onClick={()=>{handleSelect(5)}} style={{height:"11vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/4-azul.png" alt="img"/>

                    </div>
                </div>
            </div> 
             }
        </div>
    )
}