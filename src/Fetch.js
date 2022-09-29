import React,{useEffect, useState} from "react";



function Fetch() {

    
const [formData,setFormData]=useState({
    lat:'',
    lon:''
})
    const[data,setData]=useState([]) 
    const[coord,setCoord]=useState('')
    const[lat,setLat]=useState('')
    const[lon,setLon]=useState('')
    
    const getData= () =>{
        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=090cc01a2082af830309b35710fa959f`)
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=090cc01a2082af830309b35710fa959f')
        
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setData(data)
        })
    }

  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    
    }

  return (


    <>
    


<button  onClick={getData}  >Get Data</button>

{/* {data.map ((item)=> (

<h1>{item.coord.lat}</h1>
))
} */}


{/* {Object.keys(coord).map((key) => {
        return (
          <div>
            <h2>
              Lat: {coord[lat]}
            </h2>
</div>)}
)

} */}

 <div className="cardw">
 <h2 className="h3"> LON AND LAT value: {JSON.stringify(data.coord)}</h2>
 <h3>PLACE name: {JSON.stringify(data.name)}</h3>
 <h3>Wind Speed: {JSON.stringify(data.wind)} kmph</h3>
 
 </div>

<form onSubmit={handleSubmit}>
<div>
    <label htmlFor="lat">enter lat data</label>
    <input type="text" placeholder="lat" name="lat" id="lat" value={formData.lat}   onChange={e=>setFormData({...formData,lat:e.target.value})} />

    <label htmlFor="lon">enter lon data</label>
    <input type="text" placeholder="lon" name="lon" id="lon" value={formData.lon} onChange={e=>setFormData({...formData,lon:e.target.value})} />

    <button type="submit">ok</button>
</div>
</form>
 


</>
)
}
export default Fetch