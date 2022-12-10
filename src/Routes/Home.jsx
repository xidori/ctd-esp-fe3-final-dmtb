import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link} from 'react-router-dom'
import { useGlobalStates } from '../Context/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 
  const{data, dispatchFavs}=useGlobalStates()
  const addFav = (itemData) => {
    dispatchFavs({type: 'ADD_FAV', payload: itemData})
   alert( "Agregado a favoritos")
  }



  return (
    <main className="container" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.length 
           ? data.map(itemData => (
             <div className="box">
              <div className="top-bar"></div>
               <div className="content">
               <img src='../images/doctor.jpg'/>
                  <Link  key={itemData.id} to={'/dentist/' + parseInt(itemData.id)}>
                        <p>{itemData.name}</p>
                    </Link>
                    <p>{itemData.username}</p>
                    <button onClick={() => addFav(itemData)}  className="btn">⭐</button>
                 </div>
              </div> 
          ))
           : null
        }
      </div>
    </main>
  )
}

export default Home

/*   
<img src='../images/doctor.jpg' alt="beer-detail" />
 <p>{data.name}</p>
<Link to=''><Card data={data} /></Link> */