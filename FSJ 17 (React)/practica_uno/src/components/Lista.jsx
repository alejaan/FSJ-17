import React, { useState } from 'react'
import data from "./data.json"

export default function Lista() {
    /** manejando el hook useState = es el que almacena y actualiza la informacion del componente*/
    /** 
     * posicion 0 = asignamos como va a empezar el estado y guarda la autualizacion del estado para retornarlo
     * posicion 1 = Se encarga de actualizar el estado
     * 
     * contador = 0
     * setcontador = 10
     */

    const [personas, setpersona] = useState(data);
    console.log(personas);
  return (
    <div className='row'>
        <h1 className='text-center'>Lista de Usuarios</h1>

                        {
                            personas.length === 0 ? (
                                <button  className='btn btn-primary' onClick={ () => setpersona(data)}>Recuperar lista</button>
                            ) : (
                                <>


                      <button className='btn btn-danger' onClick={ () => setpersona ([])}>eliminar Lista</button>
                      
                      {
                            personas.map((persona, indice) => {
                                return (
                                    <div className='col-md-4 mt-4' key={indice}>
                                    <div className="card">
                                        <img src={persona.imagen} className="card-img-top" alt={persona.nombre} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{persona.nombre}</h5>
                                            <p className="card-text text-center">
                                                Hola! Tengo {persona.edad} años de edad.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

                                </>
                            )
                        }
    </div>
  )
}
