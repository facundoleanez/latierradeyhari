import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag4 = ({playBad, playGood}) => {

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
                    <img className="position-absolute top-50 start-50 translate-middle p-0" src="static/Diapositivas PNG/4.png" alt="pag-4" />
                    <div className="position-absolute" style={{zIndex:1}}>
                        { good ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/> : <></> }
                        { wrong ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/> : <></>}
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle" style={{zIndex:2}}>
                        <div className="row mt-3" >
                            <div className="col-1"></div>
                            <div onClick={()=>{handleSelect(0)}} className={`col-2 border p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: "8vw"}} src='static/Elementosporseparado/2Coloresprimarios/Rojo/Helado.png' alt="img" />
                            </div>
                            <div  className="col-2 border border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Regalo.png' alt="img" />

                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-2 border p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Botón.png' alt="img" />
                            </div> 
                            <div className="col-2 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Paraguas.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-2 border   p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Crayón.png' alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: " 8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Peine.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-2 border   p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Cereza.png' alt="img" />

                            </div>
                            <div className="col-2 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Pasta-dental.png' alt="img"/>

                            </div>
                            <div onClick={()=>{handleSelect(4)}} className={`col-2 border   p-2 ${isSelected[4] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Vaquita-de-san-antonio.png' alt="img"/>
                            </div>
                            <div className="col-2 border   border-dark bg-amarillo p-2 img-hover" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "8vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Cactus.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
