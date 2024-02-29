import React from 'react'
import "../Style/User.css";
import { useState, useEffect } from 'react'
const Users = ({setLoginId}) => {
    const [data, setData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.log("Something went wrong:", error);
            }
        };
        fetchData();
        
      
    }, [])
    const handleUserName=(loginId)=>{
       setLoginId(loginId)
    }
  return (
    <>
       <div className='main'>
        {
            data.length >0 ?
            data.map((obj,key)=>{
                
                return(
                    <div key={key} className='userlist' onClick={()=>handleUserName(obj.login)}>
                          <img src={obj.avatar_url} className='userimage'/>
                          <h4 className='username'>Username: <span>{obj.login}</span></h4>
                    </div>    
                )
            }): <p style={{color:"white"}}>No data found</p>
        }
       </div>

    </>
  )
}

export default Users