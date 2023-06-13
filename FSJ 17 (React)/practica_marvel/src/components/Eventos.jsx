import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Eventos() {
    //declaramos el estado para los eventos
    const [eventos, setEventos] = useState([]);

    const obtenerEventos = () => {
        /* 
            el then hace referencia al exito de la peticion
            el catch hace referencia si hubo un error en la peticion
            crud (get, post, put, delete)
        */
        axios.get("httpgateway.marvel.comv1publiccomicsts=1&apikey=b231102e05e943a134e438caf18e9fb9&hash=9673b72a3522ff3fd0782a0668d04609").then((response) => {
            console.log(response.data.data.results);
            setEventos(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        obtenerEventos();
    }, [])

    console.log(eventos)
      return (
        <div className='container'>
            <h1 className='text-center text-white'>Lista de evnetos</h1>
            <div className='row'>
                {
                    eventos.map((evento,indice) => {
                        return (
                            <div className='col-md-4 mt-4'>
                                <h5 className='card-header'>{evento.title}</h5>
                                    <div className='card-body'></div>
                                    <img src alt="" />                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
