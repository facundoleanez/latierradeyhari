import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';



export const Pag30 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false])
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
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/29.png" alt="pag-5"/> 
                    <div className="row position-absolute top-50 start-50 translate-middle justify-content-center align-items-center" style={{zIndex:1}}>
                        <div className="col-8" >
                            <div className="row m-3 border border-dark border-2 d-flex bg-amarillo">
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png' alt="img"/>
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/circulo-azul.png' alt="img" />
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png' alt="img"/>
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/cuadrado-fucsia.png' alt="img" />
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/circulo-azul.png' alt="img" />
                            </div>
                            <div className="row m-3 border border-dark border-2" >
                            <img style={{width: " 7vw"}} src={`/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo${isSelected[0] ? "" : "-linea"}.png`} alt="img"/>
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/circulo-azul.png' alt="img" />
                                <img style={{width: "7vw"}} src={`/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo${isSelected[1] ? "" : "-linea"}.png`} alt="img"/>
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/cuadrado-fucsia.png' alt="img" />
                                <img style={{width: "7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/circulo-azul.png' alt="img" />
                            </div>
                        </div>
                        <div className="col-2 mt-5">
                            <div className={isSelected[0] ? "d-none" : "img-hover p-2"} onClick={()=>{handleSelect(0)}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png' alt="img" />
                            </div>
                            <div className="img-hover p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/circulo-azul.png' alt="img" />
                            </div>
                            <div className="img-hover p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/cuadrado-fucsia.png' alt="img" />
                            </div>
                            <div className={isSelected[1] ? "d-none" : "img-hover p-2"} onClick={()=>{handleSelect(1)}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/triangulo-amarillo.png' alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}