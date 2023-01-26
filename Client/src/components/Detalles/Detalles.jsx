import React from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { details } from '../../Redux/Actions/actions'
function Detalles() {
  const dispatch = useDispatch()
    let {id} = useParams()
  
    useEffect(() => {
      dispatch(details(id))
      
    }, [dispatch, id]) 
    const detail = useSelector(state => state.detalle)
    console.log(detail, "ASd");
  return (
    <div className="flex flex-col">
    <div className="flex justify-between">
      <im
      g src="logo.png" alt="Logo de la tienda" className="h-12 w-12" />
      <div className="text-left">
        <h2 className="text-2xl font-bold">{detail.name}</h2>
        <p className="text-sm">{detail.whatsapp}</p>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-bold">Productos</h3>
      {detail.productos && detail.productos.map(e => {
        return(

      <ul>
        <li>{e.name}</li>
        
      </ul>
        )
      })}
    </div>
  </div>
  )
}

export default Detalles