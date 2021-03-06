import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';



export const Pag27 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false, false])
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);


    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad()
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
        <>
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
                <div className="row">
                    <img className="position-absolute top-50 start-50 translate-middle p-0" src="static/Diapositivas PNG/27.png" alt="pag-5"/> 
                    <div className="position-absolute adelante">
                        { good ? <img className="animate__animated animate__bounceIn ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                        { wrong ? <img className="animate__animated animate__bounceIn ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                    </div>
                    <div className="row alto-12"></div>
                    <div className="col-1"></div>
                    <div className="col-6 adelante">
                        <div className="bg-amarillo p-2 border border-dark d-flex flex-wrap justify-content-around" >
                            <img className={`img-hover m-1 ${isSelected[0] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(0)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/cuadrado-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-fucsia.png" />
                            <img className={`img-hover m-1 ${isSelected[1] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(1)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/cuadrado-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-azul.png" />
                            <img className={`img-hover m-1 ${isSelected[2] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(2)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-fucsia.png" />
                            <img className={`img-hover m-1 ${isSelected[3] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(3)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/cuadrado-naranja.png" />
                            <img className={`img-hover m-1 ${isSelected[4] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(4)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-fucsia.png" />
                            <img className={`img-hover m-1 ${isSelected[5] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(5)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/cuadrado-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-azul.png" />
                            <img className={`img-hover m-1 ${isSelected[6] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(6)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/circulo-fucsia.png" />
                            <div className="d-none d-xl-block">
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/cuadrado-amarillo.png" />
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-azul.png" />
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geom??tricas/exagono-fucsia.png" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}
