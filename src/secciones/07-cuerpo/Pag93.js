import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag93 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [completed, setCompleted] = useState(false);


    const handleClickTrue = (i) => {
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
        <>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) :
            <div className="row p-3 p-lg-5">
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/93.png" alt="pag-19"/>
                <div className="col-3 adelante text-end px-4">
                    <div className="btn btn-light border-dark letra-titulo letra-grande ">{isSelected[0] ? "CABEZA" : "_____" }</div>
                    <div className="btn btn-info letra-titulo letra-grande my-lg-4 my-1">{isSelected[1] ? "OJOS" : "_____" }</div>
                    <div className="btn btn-secondary letra-titulo letra-grande my-lg-4 my-1">{isSelected[2] ? "BOCA" : "_____" }</div>
                    <div className="btn btn-success letra-titulo letra-grande my-lg-4 my-2">{isSelected[3] ? "BRAZOS" : "_____" }</div>
                    <div className="btn btn-danger letra-titulo letra-grande my-lg-4 my-1">{isSelected[4] ? "PIERNAS" : "_____" }</div>
                </div>
                <div className="col-4 adelante"></div>
                <div className="col-2 adelante">
                    <div style={{height:"13vw"}}></div>
                    <div className="btn btn-warning letra-titulo letra-chica my-1 my-lg-2">{isSelected[5] ? "OREJA" : "_____" }</div>
                    <div className="btn btn-success letra-titulo letra-chica my-lg-3">{isSelected[6] ? "NARIZ" : "_____" }</div>
                    <div className="btn btn-danger letra-titulo letra-chica my-1 my-lg-2">{isSelected[7] ? "MANO" : "_____" }</div>
                    <div className="btn btn-dark letra-titulo letra-chica my-lg-3">{isSelected[8] ? "TORSO" : "_____" }</div>
                    <div className="btn btn-primary letra-titulo letra-chica my-1 my-lg-2">{isSelected[9] ? "PIES" : "_____" }</div>
                </div>
                <div className="col-3 adelante">
                    <div style={{height:"12vw"}}></div>
                    <div className="bg-amarillo border border-dark rounded p-2 p-lg-3 m-lg-4 ">
                        { !isSelected[9] && <div className="btn btn-primary letra-titulo m-md-2" onClick={()=>{handleClickTrue(9)}} style={{fontSize:"1vw"}}>TORSO</div>}
                        { !isSelected[5] && <div className="btn btn-warning letra-titulo m-md-2" onClick={()=>{handleClickTrue(5)}} style={{fontSize:"1vw"}}>OREJA</div>}
                        { !isSelected[6] && <div className="btn btn-success letra-titulo m-md-2" onClick={()=>{handleClickTrue(6)}} style={{fontSize:"1vw"}}>NARIZ</div>}
                        { !isSelected[7] && <div className="btn btn-danger letra-titulo m-md-2" onClick={()=>{handleClickTrue(7)}} style={{fontSize:"1vw"}}>MANO</div>}
                        { !isSelected[8] && <div className="btn btn-dark letra-titulo m-md-2" onClick={()=>{handleClickTrue(8)}} style={{fontSize:"1vw"}}>TORSO</div>}
                        { !isSelected[0] && <div className="btn btn-light letra-titulo m-md-2" onClick={()=>{handleClickTrue(0)}} style={{fontSize:"1vw"}}>CABEZA</div>}
                        { !isSelected[1] && <div className="btn btn-info letra-titulo m-md-2" onClick={()=>{handleClickTrue(1)}} style={{fontSize:"1vw"}}>OJOS</div>}
                        { !isSelected[2] && <div className="btn btn-secondary letra-titulo m-md-2" onClick={()=>{handleClickTrue(2)}} style={{fontSize:"1vw"}}>BOCA</div>}
                        { !isSelected[3] && <div className="btn btn-success letra-titulo m-md-2" onClick={()=>{handleClickTrue(3)}} style={{fontSize:"1vw"}}>BRAZOS</div>}
                        { !isSelected[4] && <div className="btn btn-danger letra-titulo m-md-2" onClick={()=>{handleClickTrue(4)}} style={{fontSize:"1vw"}}>PIERNAS</div>}
                    </div>
                </div>
                
            </div>
            }
        </>
    )
}
