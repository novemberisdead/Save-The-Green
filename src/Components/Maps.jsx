import React from 'react'
import { EndangeredPlants } from '../constants'
import {MapContainer,Marker,Popup,TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';




  const center = [0,30]
   


function Maps(props, ref) {
   

     
     
      
      
    return  (
        <section ref={ref}
        className='min-h-screen p-6 flex-col items-center justify-center text-center'>
           <h2 className='text-3xl font-semibold pt-16 pb-4 font-poppins text-[#228B22]'>Mapping Endangered Trees</h2>
      <MapContainer  className='w-[100vw] h-[80vh] mx-auto'
      center={[20.0, 45.0]}  zoom={3}  >
      <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>


        {EndangeredPlants.map((tree)=>{
          
          return(
          <Marker key={tree.id} position={tree.coordinates}>
            <Popup>
              <h3 className='font-semibold'>{ tree.plantName}</h3>
              <h4 className=' italic'>{tree.location}</h4>
            </Popup>
          </Marker>
        )})
        
       
        }
        
        </MapContainer>

        </section>
    )
}

export default React.forwardRef(Maps)
