import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#228B22] text-white text-center p-1'>
            <p className='text-sm'>

            © {new Date().getFullYear()} The Last Leaves. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
