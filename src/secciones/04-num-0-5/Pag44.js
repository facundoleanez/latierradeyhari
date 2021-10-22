import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag44 = ({playBad, playGood}) => {

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
                <div className="row" style={{height:"7vw"}} ></div>
                <img className="position-absolute p-0" src="static/Diapositivas PNG/44.png" alt="pag-19"/> 
                <div className="col-5"></div>
                <div className="col-7" style={{zIndex:2}}>
                    <div className="p-3" >
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/1-cuaderno.png" alt="img"/>
                       <img className={`img-hover ${isSelected[0]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(0)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/pelota-y-el-2.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/canasta-con-manzanas.png" alt="img"/>
                       <img className={`img-hover ${isSelected[1]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(1)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/pajarito-con-el-2.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2-nenes.png" alt="img"/>
                       <img className={`img-hover ${isSelected[3]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(3)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/arbol-con-el-2.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/3-gatitos.png" alt="img"/>
                       <img className={`img-hover ${isSelected[4]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(4)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2-serpiente.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/3-medias.png" alt="img"/>
                       <img className={`img-hover ${isSelected[2]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(2)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2-con-cara.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/3-pajaritos.png" alt="img"/>
                       <img className={`img-hover ${isSelected[5]? "animate__animated animate__rotateInDownLeft selected" : ""}`} onClick={()=>{handleSelect(5)}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/2.png" alt="img"/>
                       <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 Números del 0 al 5/arbol-con-manzanas.png" alt="img"/>
                    </div>
                </div>
            </div> 
             }
        </div>
    )
}