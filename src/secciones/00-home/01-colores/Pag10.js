import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../../components/BienHecho';

export const Pag10 = () => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false])

    const [completed, setCompleted] = useState(false);

    const handleSelect = (i) => {
      setIsSelected((prevState) => prevState.map((item,index) => {
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

    return (
        <div className="container text-center">
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
            
            <>
                <div className="row">
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/10.png" alt="pag-4" />
                    <div className="position-absolute top-50 start-50 translate-middle" style={{zIndex:2}}>
                        <div className="row mt-3" >
                            <div className="col-1"></div>
                            <div  onClick={()=>{handleSelect(0)}} className={`col-2 border border-2 p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                                <img style={{width: "4vw"}} src='static/Elementosporseparado/2Coloresprimarios/Amarillo/patito.png' alt="img" />
                            </div>
                            <div  className="col-2 border border-3 border-dark bg-amarillo p-2">
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/velero.png' alt="img" />

                            </div>
                            <div onClick={()=>{handleSelect(1)}} className={`col-2 border border-3 p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/botas.png' alt="img" />
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/arbol.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(2)}} className={`col-2 border border-3 p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/planeta.png' alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/tren.png' alt="img" />
                            </div>
                            <div onClick={()=>{handleSelect(3)}} className={`col-2 border border-3 p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "5vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/dinosaurio.png' alt="img" />

                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                                <img style={{width: "3vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/lampara.png' alt="img"/>

                            </div>
                            <div onClick={()=>{handleSelect(4)}} className={`col-2 border border-3 p-2 ${isSelected[4] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                                <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Amarillo/pera.png' alt="img"/>
                            </div>
                            <div className="col-2 border border-3 border-dark bg-amarillo p-2">
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