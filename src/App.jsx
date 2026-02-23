import { useState,useEffect } from 'react'
import './App.css'

function App() {
      const[data,setData]=useState([])
      const[loading,setLoading]=useState(true)
      const[error,setError]=useState(null)

      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const result=await response.json()
            setData(result)
          }
          // eslint-disable-next-line no-unused-vars
          catch(err){
            setError("error fetching api")
          }
          finally{
            setLoading(false)
          }
        }
        fetchData()
      },[])

        if(loading)return <h2>LOADING....</h2>
        if(error)return <h2>{error}</h2>

        return(
          <>
            <div>
              {
                data.map((user)=>{
                  return (
                    <>  
                      <p key={user.id}>THE USER NAME:{user.name}</p>
                      <p key={user.id}>THE USER EMAIL:{user.email}</p>
                      <p key={user.id}>THE USER CITY:{user.address.city}</p>

                    </>
                  )

                })
              }
            </div>
          </>
        )
      
  

 
}

export default App