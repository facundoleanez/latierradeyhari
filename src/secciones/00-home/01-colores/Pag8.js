import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../../components/BienHecho';

export const Pag8 = ({height}) => {

    const [completed, setCompleted] = useState(false)

    const [selected, setSelected] = useState([
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
        { clicked: false, value: 0 },
      ]);
    
      const handleClick = (index) => {
        setSelected((prevState) =>
          prevState.map((sel, ind) => {
            if (ind === index && !sel.clicked ) {
              return {
                clicked: true,
                value: prevState.filter((itm) => itm.clicked).length + 1
              };
            }
            return sel;
          })
        );
      };
    
    useEffect(() => {
        if (selected.every(elem => elem.clicked )){
            setCompleted(true)
        }
    }, [selected])



    return (
        <div className="container">
            { completed ? ( <BienHecho setCompleted={setCompleted}/> ) :
                <div className="row">
                    <img className="position-absolute p-0" src="static/Diapositivas PNG/8.png" alt="pag-5"/> 
                    <div className="bg-amarillo overflow-hidden m-3 m-sm-5 p-3 p-xl-5 position-absolute bottom-0 start-0" style={{ borderRadius:"45%", width:"50%", zIndex:2}}>
                        
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(0)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[0].clicked ? selected[0].value : "/Azul/estrella-azul" }.png`} />
                         
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(1)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[1].clicked ? selected[1].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(2)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[2].clicked ? selected[2].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(3)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[3].clicked ? selected[3].value : "/Azul/estrella-azul" }.png`} />

                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-celetse.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(4)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[4].clicked ? selected[4].value : "/Azul/estrella-azul" }.png`} />

                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(5)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[5].clicked ? selected[5].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(6)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[6].clicked ? selected[6].value : "/Azul/estrella-azul" }.png`} />

                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-celetse.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(7)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[7].clicked ? selected[7].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(8)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[8].clicked ? selected[8].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                        <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(9)}} style={{height:"3vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[9].clicked ? selected[9].value : "/Azul/estrella-azul" }.png`} />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                        <img className="img-hover" alt="img-1" style={{height:"3vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                    </div>
                </div>
            }
        </div>
        
    )
}
