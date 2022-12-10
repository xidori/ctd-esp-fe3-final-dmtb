import { createContext, useContext, useReducer, useEffect, useState } from "react";
const GlobalStates = createContext()

const initialFavState = []

const favsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
    }
}


const Context =  ({children}) => {
     const [data, setData] = useState([])
     const [stateFavs, dispatchFavs] = useReducer(favsReducer,initialFavState, initFav)

    

    function initFav(initialFavState) {
        return localStorage.getItem("favs")
          ? JSON.parse(localStorage.getItem("favs"))
          : initialFavState;
      }
 
    const getData = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setData(data)
    }

    useEffect(()=>{
        getData()
    })

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])

    
  return (
       <GlobalStates.Provider
             value={{data, stateFavs,dispatchFavs}}
       >
          {children}
       </GlobalStates.Provider>
       
  )
}

export default Context

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}