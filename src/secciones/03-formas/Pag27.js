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
        <div className="container">
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
                <div className="row">
                    <div className="text-start" style={{zIndex:1}}>
                        { good && <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/>}
                        { wrong && <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/>}
                    </div>
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/27.png" alt="pag-5"/> 
                    <div className="bg-amarillo overflow-hidden m-3 m-sm-5 p-3 p-xl-5 position-absolute bottom-0 start-0 border border-dark" style={{width:"50%", zIndex:2}}>
                        <img className={`img-hover m-1 ${isSelected[0] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(0)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-amarillo.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-azul.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-fucsia.png" />
                        <img className={`img-hover m-1 ${isSelected[1] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(1)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-azul.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-amarillo.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-azul.png" />
                        <img className={`img-hover m-1 ${isSelected[2] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(2)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-fucsia.png" />
                        <img className={`img-hover m-1 ${isSelected[3] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(3)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-azul.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-naranja.png" />
                        <img className={`img-hover m-1 ${isSelected[4] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(4)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-amarillo.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-fucsia.png" />
                        <img className={`img-hover m-1 ${isSelected[5] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(5)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-azul.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/cuadrado-amarillo.png" />
                        <img className="img-hover m-1" alt="img-1" onClick={()=>{handleClickWrong()}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/exagono-azul.png" />
                        <img className={`img-hover m-1 ${isSelected[6] ? "selected" : ""}`} alt="img-1" onClick={()=>{handleSelect(6)}} style={{height:" 4vw"}} src="static/Elementosporseparado/4 Formas geométricas/circulo-fucsia.png" />
                    </div>
                </div>
            }
        </div>
        
    )
}
