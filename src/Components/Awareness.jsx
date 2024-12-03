import React from 'react'
import Lottie from "lottie-react"
import  crisis from "../assets/animations/crisis.json"
import deforest from "../assets/animations/deforest.json"
import Protect from "../assets/animations/ProtectOurFuture.json"
import Footer from './Footer'

function Awareness(props,ref) {

    const TreesData = [
        {
            Title:"A Crisis for Trees",
            description:"With over 60,000 tree species worldwide, nearly 30% are at risk of extinction. This alarming statistic means around 17,500 species are endangered, outpacing the combined total of threatened mammals, birds, and reptiles. From the majestic Amazon rainforest to Madagascar’s unique baobabs, the loss of these trees spells disaster for biodiversity and the ecosystems they sustain.",
            img:deforest
        },
        {
            Title:"Vanishing Forests",
            description:"Deforestation, overharvesting, and climate change are driving this crisis. Countries like Brazil and Indonesia, rich in biodiversity, are losing forests at an alarming rate, endangering species like rosewoods and the Dragon Blood Tree. Invasive species and habitat destruction further exacerbate the issue, leaving some trees, such as the Franklin Tree, extinct in the wild.",
            img:crisis
        },
        {
            Title:"Protecting Our Future",
            description:"The disappearance of trees disrupts ecosystems and worsens climate change. Forests absorb billions of tons of CO₂ annually, yet deforestation reduces this vital benefit, intensifying global warming. Initiatives like the Global Tree Assessment are working to identify risks and promote conservation, but saving trees requires global awareness and action to protect the lungs of our planet.",
            img:Protect
        },
    ]
    return (
        <section ref={ref} className='min-h-screen'>
            <h1 className='text-center text-3xl font-poppins font-semibold text-[#228B22] pt-16'>A World Without Trees</h1>
            <h2 className='text-center text-xl font-poppins  text-[#228B22]'>Each lost tree is a chapter erased from Earth's story. Let's rewrite the ending.</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-4 pb-20'>
                
                {TreesData.map((tree,index)=>(
                    <div key={index}
                    className='bg-[#FAF9F6] border-[#228B22] border-2 p-6  text-center rounded-tl-3xl rounded-br-3xl shadow-lg'>
                        <div className='flex items-center justify-center '>
                            
                        <Lottie animationData={tree.img} loop={true} style={{height:'120px',width:'120px',}} />
                        </div>
                        <h2 className='text-xl font-semibold font-poppins text-[#228B22]'>{tree.Title}</h2>
                        <p className='font-roboto'>{tree.description}</p>

                    </div>
                ))}
            </div>
          <Footer/>      
                
        </section>
    )
}

export default React.forwardRef(Awareness)
