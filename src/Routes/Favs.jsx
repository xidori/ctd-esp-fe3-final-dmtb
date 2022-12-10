import React from "react";
import Card from "../Components/Card";
import { Link} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let data = JSON.parse(localStorage.getItem('favs'))
  console.log(data)

  return (
    <>
    <div className="container">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
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
                    <span className="btn">⭐</span>
                 </div>
              </div> 
          ))
           : null
        }

      </div>
    </div>  
    </>
  );
};

export default Favs;
