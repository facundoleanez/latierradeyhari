import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag3 = () => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false])

    const [good, setGood] = useState('');

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
            setGood("Bien Hecho")
        }
    }, [isSelected])

    return (
        <div className="container text-center p-0">
            { good !== "" ? ( <BienHecho /> ) :
            
            <>
                <h3 className="m-lg-5 mt-3">MIRA Y HAZ CLICK EN LOS OBJETOS DE COLOR ROJO</h3>
                <div className="row pt-lg-5">
                    <div className="col-1"></div>
                    <div onClick={()=>{handleSelect(0)}} className={`col-2 border border-2 p-2 ${isSelected[0] ? "selected" : "border-dark"} bg-amarillo img-hover`} >
                        <img style={{width: "4vw"}} src='static/Elementosporseparado/2Coloresprimarios/Rojo/Helado.png' alt="img" />
                    </div>
                    <div  className="col-2 border border-3 border-dark bg-amarillo p-2">
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Regalo.png' alt="img" />

                    </div>
                    <div onClick={()=>{handleSelect(1)}} className={`col-2 border border-3 p-2 ${isSelected[1] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Botón.png' alt="img" />
                    </div>
                    <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Paraguas.png' alt="img" />
                    </div>
                    <div onClick={()=>{handleSelect(2)}} className={`col-2 border border-3 p-2 ${isSelected[2] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Crayón.png' alt="img" />
                    </div>
                </div>
                <div className="row ">
                <div className="col-1"></div>
                    <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Peine.png' alt="img" />
                    </div>
                    <div onClick={()=>{handleSelect(3)}} className={`col-2 border border-3 p-2 ${isSelected[3] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Cereza.png' alt="img" />

                    </div>
                    <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Pasta-dental.png' alt="img"/>

                    </div>
                    <div onClick={()=>{handleSelect(4)}} className={`col-2 border border-3 p-2 ${isSelected[4] ? "selected" : "border-dark"} bg-amarillo img-hover`}>
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Vaquita-de-san-antonio.png' alt="img"/>
                    </div>
                    <div className="col-2 border border-3 border-dark bg-amarillo p-2">
                        <img style={{width: "4vw"}} src='/static/Elementosporseparado/2Coloresprimarios/Rojo/Cactus.png' alt="img"/>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
