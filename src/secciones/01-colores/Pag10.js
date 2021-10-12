import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag10 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false])
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
        <div className="container text-center">
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
            
            <>
                <div className="row">
                    <div className="text-start" style={{zIndex:1}}>
                        { good ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/> : <></> }
                        { wrong ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/> : <></>}
                    </div>
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/10.png" alt="pag-4" />
                    <div className="position-absolute top-50 start-50 translate-middle" style={{zIndex:2}}>
                        <div className="row mt-3" >
                            <div className="col-1"></div>
                            <div  onClick={()=>{handleSelect(0)}} className={`col-2 border border-2 p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: "4vw"}} src='static/Elementosporseparado/2Coloresprimarios/Amarillo/patito.png' alt="img" />
                            </div>
                            <div  className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/velero.png' alt="img" />

                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-2 border border-3 p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/botas.png' alt="img" />
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/arbol.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-2 border border-3 p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/planeta.png' alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/tren.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-2 border border-3 p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "5vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/dinosaurio.png' alt="img" />

                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "3vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/lampara.png' alt="img"/>

                            </div>
                            <div onClick={()=>{handleSelect(4)}} className={`col-2 border border-3 p-2 ${isSelected[4] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/pera.png' alt="img"/>
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/gorra.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}