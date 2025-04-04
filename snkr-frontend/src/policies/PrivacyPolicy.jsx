import React from 'react'
import { assets } from '../assets/assets'

const PrivacyPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.fast_delivery_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Fast Delivery</p>
        <p className='text-gray-400'>Enjoy safe and encrypted transactions with multiple payment methods.</p>
      </div>
      <div>
        <img src={assets.secure_payment_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Fast Delivery</p>
        <p className='text-gray-400'>Enjoy safe and encrypted transactions with multiple payment methods.</p>
      </div>
      <div>
        <img src={assets.free_shipping_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Fast Delivery</p>
        <p className='text-gray-400'>Enoy Free Express Shipping On All Order</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy