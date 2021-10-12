import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag7 = () => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false])
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);


    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
    }

    const handleSelect = (i) => {
      setIsSelected((prevState) => prevState.map((item,index) => {
          setGood(true);
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
                <div className="row">
                    <div className="text-start" style={{zIndex:1}}>
                        { good ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/> : <></> }
                        { wrong ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/> : <></>}
                    </div>
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/7.png" alt="pag-4" />
                    <div className="position-absolute top-50 start-50 translate-middle" style={{zIndex:2}}>
                        <div className="row mt-3" >
                            <div className="col-1"></div>
                            <div  onClick={()=>{handleSelect(0)}} className={`col-2 border border-2 p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: "4vw"}} src='static/Elementosporseparado/2Coloresprimarios/Azul/libro.png' alt="img" />
                            </div>
                            <div  className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/oso.png' alt="img" />

                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-2 border border-3 p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/sonajero.png' alt="img" />
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/frasco.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-2 border border-3 p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "3vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/cepillo-dientes.png' alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/reloj.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-2 border border-3 p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/auto.png' alt="img" />

                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/muffin.png' alt="img"/>

                            </div>
                            <div onClick={()=>{handleSelect(4)}} className={`col-2 border border-3 p-2 ${isSelected[4] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/sombrero.png' alt="img"/>
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2" onClick={()=>{handleClickWrong()}}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Azul/cohete.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
