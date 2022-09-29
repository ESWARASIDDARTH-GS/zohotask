import React,{useEffect, useState} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';




function Fetchc() {


    const[data,setData]=useState([]) 
    
    const getData= () =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setData(data)
        })
    }

    // useEffect(() => {
    //   getData()
    // }, [])
    
 

  return (
    <div className="btn">




<Button  onClick={getData}  variant="primary" size="lg">
         Get country Data
        </Button>




<div className="cardflag">

{
                data.map((item) => ( 
                <h1 key = { item.id } >
                      <img className="img" src={item.flags.png} alt="" />
                     <br />
                    Common name: { item.name.common }
                    <br />
                    Official Name:  <h2 className="h3">{ item.name.official }</h2>
                    <br />
                   Capital: <h3 className="h3">{ item.capital } </h3> 
                 
                   <br />
                  

                   </h1>
                
                
            
                ))
            }
</div>





    </div>
  )
}

export default Fetchc