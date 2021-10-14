import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';



export const Pag25 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false])
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
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/25.png" alt="pag-5"/> 
                    <div className=" overflow-hidden m-3 m-sm-5 position-absolute bottom-0 end-0 border border-dark" style={{width:"50%", zIndex:2}}>
                        <div className="row text-center" >
                            <div onClick={()=>{handleSelect(0)}} className={`col-3 border p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: " 5vw"}} src='static/Elementosporseparado/4 Formas geométricas/cono-helado.png' alt="img" />
                            </div>
                            <div  className="col-3 border border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/olla.png' alt="img" />

                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-3 border p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 7vw"}} src='/static/Elementosporseparado/4 Formas geométricas/carpa.png' alt="img" />
                            </div> 
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/gorro.png' alt="img" />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 5vw"}} src='/static/Elementosporseparado/4 Formas geométricas/celular.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-3 border   p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/sandia.png' alt="img" />

                            </div>
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geométricas/llave.png' alt="img"/>

                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-3 border   p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 5vw"}} src='/static/Elementosporseparado/4 Formas geométricas/pino.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}
