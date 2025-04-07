import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex'>
            <img src={assets.hero_img} alt="" className='hidden sm:block w-full h-full' />
            <img src={assets.hero_img_mobile_screen} alt="" className='block sm:hidden w-full h-full' />
        </div>
    )
}

export default Hero