import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';



export const Pag24 = ({playBad, playGood}) => {

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
        <div>
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
                <div className="row">
                    <img className="position-absolute top-50 start-50 translate-middle p-0" src="static/Diapositivas PNG/24-bis.png" alt="pag-5"/> 
                    <div className="position-absolute" style={{zIndex:1}}>
                        { good && <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/>}
                        { wrong && <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/>}
                    </div>
                    <div className="row" style={{height:"10vw"}}></div>
                    <div className="col-8"style={{zIndex:2}}>
                            <div className="bg-amarillo m-3 m-md-5 p-2 border border-dark d-flex flex-wrap" >
                            <img className={`img-hover m-1 ${isSelected[0] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(0)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-fucsia.png" />
                            <img className={`img-hover m-1 ${isSelected[1] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(1)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-azul.png" />
                            <img className={`img-hover m-1 ${isSelected[2] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(2)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-fucsia.png" />
                            <img className={`img-hover m-1 ${isSelected[3] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(3)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-azul.png" />
                            <img className={`img-hover m-1 ${isSelected[4] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(4)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-naranja.png" />
                            <img className={`img-hover m-1 ${isSelected[5] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(5)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-azul.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-amarillo.png" />
                            <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-azul.png" />
                            <img className={`img-hover m-1 ${isSelected[6] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(6)}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/triangulo-fucsia.png" />
                            <div className="d-none d-xl-block">
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-amarillo.png" />
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-azul.png" />
                                <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:"6.5vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-naranja.png" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}
