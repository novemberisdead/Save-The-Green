import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React,{ Suspense } from 'react'
import './index.css'
import Lottie from 'lottie-react'
import loading from "./assets/animations/loading.json"

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}
const App = React.lazy(() => delay(2000).then(() => import("./App")))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className='h-[100vh] flex items-center justify-center bg-[#d9dbd1]'> <Lottie animationData={loading} loop={true} /> </div>}>
    <App />
    </Suspense>
  </StrictMode>,
)
