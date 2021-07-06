import React, { useEffect, useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);
    const [desaBotonSumar, setDesaBotonSumar] = useState(false);
    const [desaBotonRestar, setDesaBotonRestar] = useState(false);
    
    useEffect(() => {
        if(contador>initial || stock<contador){
            setDesaBotonRestar(false);
            setDesaBotonSumar(false);
        }else if(contador<=initial){
            setDesaBotonRestar(true);
        }
        if (contador>= stock){
            setDesaBotonSumar(true);
        }
    }, [contador]);

    const sumar = () =>{
        setContador(contador+1);
    };

    const restar = () =>{
        setContador(contador-1);
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="">
                <div>
                    <div className="d-flex justify-content-around ">
                        <button 
                            className="btn btn-secondary btn-block mt-1" 
                            onClick={restar} disabled={desaBotonRestar}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <button className="btn btn-light btn-block mt-1">{contador}</button>
                        <button 
                            className="btn btn-primary btn-block mt-1" 
                            onClick={sumar} disabled={desaBotonSumar}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button 
                    className="btn btn-outline-primary mt-1"
                    onClick={()=> onAdd(contador)}
                    >
                    Seleccionar Cantidad
                </button>
            </div>
        </div>
    )
}