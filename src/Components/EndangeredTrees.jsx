import React from 'react'
import { EndangeredPlants } from '../constants'

function EndangeredTrees(props,ref) {

    
    return (
        <section ref={ref}  className='min-h-screen'>
            <div className='container mx-auto pt-20'>
                <h2 className='text-center text-3xl font-semibold font-poppins text-[#228B22] '>Endangered Trees</h2>
                    <p className='text-center font-roboto text-lg text-[#228B22]'>Discover some of the most endangered tree species around the world and their significance.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 gap-y-10 '>
                        {EndangeredPlants.map((trees)=>(
                            <div key={trees.id} className='relative p-2 border-2 bg-[#FAF9F6] border-[#228B22] rounded-br-3xl rounded-tl-3xl shadow-lg overflow-hidden transition hover:shadow-xl group '>
                                <div className='p-0'>
                                    <img 
                                    src={trees.plantImg}
                                    className='w-full h-80 object-cover rounded-br-3xl rounded-tl-3xl border-2 border-[#228B22] border-opacity-30'/>
             
              <div className=" inset-0 bg-black bg-opacity-50"></div>

            
                <h3 className="text-xl font-semibold text-[#228B22]">{trees.plantName}</h3>
                <p className="text-sm text-gray-400 italic">{trees.scientificName}</p>
                <p className="text-md mt-[0.5px] p-[0.5px] font-roboto ">{trees.description}</p>
              <div className="absolute inset-0 bg-[#228B22] bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[1.5px] border-[0.3px] rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
                <div className='text-[#F5F5F5] p-4  font-roboto '>
                    
                    <p className='p-2'><strong>The Vital Role of These Trees:</strong> {trees.uses}</p>
                    
                    <p className='p-2'><strong>Preservation:</strong> {trees.preservation}</p>
                </div>
              </div>
                        </div>
                                </div>
                          
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default React.forwardRef(EndangeredTrees)
