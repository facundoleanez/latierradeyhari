import React, { useEffect, useState } from 'react'
import { BienHecho } from '../../components/BienHecho';

export const Pag8 = ({playBad, playGood}) => {

    const [completed, setCompleted] = useState(false)
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

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
              playGood();
              return {
                clicked: true,
                value: prevState.filter((itm) => itm.clicked).length + 1
              };
            }
            setGood(true)
            return sel;
          })
        );
      };
      const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad()
    }
    useEffect(() => {
        if (selected.every(elem => elem.clicked )){
            setCompleted(true)
        }
    }, [selected])

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
                <img className="position-absolute top-50 start-50 translate-middle p-0" src="static/Diapositivas PNG/8.png" alt="pag-5"/> 
                <div className="position-absolute" style={{zIndex:1}}>
                    { good ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{width:"10vw"}}/> : <></> }
                    { wrong ? <img className="animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{width:"10vw"}}/> : <></>}
                </div>
                <div className="row" style={{height:"10vw"}}></div>
                    
                    <div className="col-7" style={{zIndex:1}}>
                      <div className="bg-amarillo mx-auto position-relative border border-dark" style={{ borderRadius:"50%", height:"35vw", width:"35vw" }}>
                        <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ height:"27vw", width:"27vw" }}>
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(0)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[0].clicked ? selected[0].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(1)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[1].clicked ? selected[1].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(2)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[2].clicked ? selected[2].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(3)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[3].clicked ? selected[3].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-celetse.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(4)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[4].clicked ? selected[4].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(5)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[5].clicked ? selected[5].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(6)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[6].clicked ? selected[6].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-celetse.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-rosa.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(7)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[7].clicked ? selected[7].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-verde.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(8)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[8].clicked ? selected[8].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                          <img className={"img-hover"} alt="img-1" onClick={()=>{handleClick(9)}} style={{height:"4.5vw"}} src={`static/Elementosporseparado/2Coloresprimarios/${selected[9].clicked ? selected[9].value : "/Azul/estrella-azul" }.png`} />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-amarilla.png" />
                          <img className="img-hover" onClick={()=>handleClickWrong()} alt="img-1" style={{height:"4.5vw"}} src="static/Elementosporseparado/2Coloresprimarios/Azul/estrella-roja.png" />
                        </div>
                      </div>
                    </div>
              </div>
            }
        </div>
        
    )
}
