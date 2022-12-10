import React from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({data}) => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const params = useParams()
    console.log(params)

    let itemCard = data.find(item => item.id == params.id)
    console.log(itemCard)


  return (
    <> 
      <h1>Detail Dentist </h1>
      <div className='card-grid'>
         <table>
            <tr>
                <td>Nombre </td>
                <td>Email </td>
                <td>Telefono </td>
                <td>Website</td>
            </tr>
            <tr>
                <td>{itemCard?.name}</td>
                <td>{itemCard?.email}</td>
                <td>{itemCard?.phone}</td>
                <td>{itemCard?.website}</td>
            </tr>
         </table>
         

      </div>

       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail

/*

     <p>{itemCard?.name}</p>
              <p>{itemCard?.email}</p>
              <p>{itemCard?.phone}</p>
              <p>{itemCard?.website}</p>
*/