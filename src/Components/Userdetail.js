import React from 'react'
import { useEffect, useState } from 'react'
import "../Style/Userdetail.css"
const Userdetail = ({loginId}) => {
  const [data, setData] = useState([])
  let [repoData, setRepoData] = useState()
  useEffect(() => {
   const fetchLoginId=async ()=>{
       try {
        const response = await fetch(`https://api.github.com/users/${loginId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const responseData = await response.json()
        setData(responseData)
         
       } catch (error) {
        console.log("Something worng",Error);
       }
   }
   const fetchLoginIdRespos=async ()=>{
    try {
     const response = await fetch(`https://api.github.com/users/${loginId}/repos`);
     if (!response.ok) {
       throw new Error('Failed to fetch data')
     }
     const responseData = await response.json()
     const repoArray = responseData.map((obj,key)=>{
      return(obj.language)
     }) 
     
     setRepoData(repoArray)
      
    } catch (error) {
     console.log("Something worng",Error);
    }
}
   fetchLoginId()
   fetchLoginIdRespos()
  }, [loginId])
  if(!repoData){
    repoData = ["No Data available"];
  }
  console.log();
   const filterArr = repoData.filter((value, index)=>{
      return(
          repoData.indexOf(value) === index
        )
       })
   
  return (
    <>
    {(loginId)?
    <div className='Userdetailmain'>
    <div >
                <div className='Userdetailcontainer'>
                  <div>
                  <img src={data.avatar_url} className='detailimg'></img>
                  </div>
                <div className='Userdetails'>
                  <h4>Name: {(data?.name === null)?<span>Data not available</span>:<span>{data?.name}</span>}</h4>
                  <h4>Location: {(data?.location === null)?<span>Data not available</span>:<span>{data?.location}</span>}</h4>
                  <h4>Login Id: {(data?.login === null)?<span>Data not available</span>:<span>{data?.login}</span>}</h4>
                  <h4>Company: {(data?.company === null)?<span>Data not available</span>:<span>{data?.company}</span>}</h4>
                  <h4>Followers: {(data?.followers === null)?<span>Data not available</span>:<span>{data?.followers}</span>}</h4>
                  <h4>Following: {(data?.following === null)?<span>Data not available</span>:<span>{data?.following}</span>}</h4>
                </div>
                </div> 
                <div className='userotherdetails'>
                <h4>Total_repos: {(data?.public_repos === null)?<span>Data not available</span>:<span>{data?.public_repos}</span>}</h4>
                 <div className="displayContainer">
                  {
                    filterArr.map((obj,key)=>{
                      return(
                        obj!==null ?<div key={key} className='displaylanguage'>
                        <p>{obj}</p>
                       </div>:null
                        
                      )
                    })
                  }
                 </div>
                </div>
          </div>  

    </div>  :<p className='nodata'>No profile is selected</p>
  }
      
    </>
  )
}

export default Userdetail
