import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';



export const Pag28 = ({playBad, playGood}) => {

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
        <>
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
                <div className="row">
                    <img className="position-absolute top-50 start-50 translate-middle p-0" src="static/Diapositivas PNG/28.png" alt="pag-5"/> 
                    <div className="position-absolute adelante">
                        { good ? <img className="animate__animated animate__bounceIn ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/> : <></> }
                        { wrong ? <img className="animate__animated animate__bounceIn ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/> : <></>}
                    </div>
                    <div className="row alto-15"></div>
                    <div className="col-5"></div>
                    <div className="col-6 adelante">   
                        <div className="row text-center">
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 3vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/pincel.png' alt="img" />
                            </div>
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/pera.png' alt="img"/>
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-3 border   p-2 ${isSelected[2] ? "selected animate__animated animate__heartBeat" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/pelota.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-3 border   p-2 ${isSelected[3] ? "selected animate__animated animate__heartBeat" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/amarillo.png' alt="img"/>
                            </div>
                        </div>
                        <div className="row text-center" >
                            <div onClick={()=>{handleSelect(0)}} className={`col-3 border p-2 ${isSelected[0] ? "selected animate__animated animate__heartBeat" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: " 6vw"}} src='static/Elementosporseparado/4 Formas geom??tricas/reloj.png' alt="img" />
                            </div>
                            <div  className="col-3 border border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 7vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/pelota-2.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-3 border p-2 ${isSelected[1] ? "selected animate__animated animate__heartBeat" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/boton.png' alt="img" />
                            </div> 
                            <div className="col-3 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 6vw"}} src='/static/Elementosporseparado/4 Formas geom??tricas/sombrero.png' alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}
