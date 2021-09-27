import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag5 = () => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false])

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
        <div className="container text-center">
            { good !== "" ? ( <BienHecho/> ) :
                <div className="row">
                    <img className="position-absolute p-0" src="static\Diapositivas PNG\5-a.png"/> 
                    <div className="col-6">
                    </div>
                    <div className="col-6 d-flex p-md-5 my-md-3 pt-sm-5 " style={{zIndex:2}}>
                            <div className=" bg-amarillo overflow-hidden mt-5  py-md-5 px-2" style={{ borderRadius:"40%"}}>
                                <img className="img-hover" onClick={()=>{handleSelect(0)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-azul.png" />
                                <img className="img-hover" onClick={()=>{handleSelect(1)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-naranja.png" />
                                <img className="img-hover" onClick={()=>{handleSelect(2)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-verde.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-verde-agua.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-amarillo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-azul.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-celeste.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-naranja.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-verde.png" />
                                <img className="img-hover" onClick={()=>{handleSelect(3)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-verde-agua.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-amarillo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-azul.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-celeste.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-naranja.png" />
                                <img className="img-hover" onClick={()=>{handleSelect(4)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-verde.png" />
                                <img className="img-hover" onClick={()=>{handleSelect(5)}} style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-rojo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-amarillo.png" />
                                <img className="img-hover" style={{height:"3.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Rojo/Corazon-azul.png" />
                            </div>
                    </div>
                </div>
            }
        </div>
        
    )
}
