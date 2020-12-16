import React from 'react'
import { useSelector } from 'react-redux'

export const Footer = () => {
  const contacts = useSelector((state) => state.contacts)

  return (
    <div className='footer'>
      <a href='tel:+38 (045) 792 36 20' className='footer__phone'>
        {contacts.phone}
      </a>
      <a href='mailto:culture@slavutych.capital' className='footer__email'>
        {contacts.email}
      </a>
      <div className='footer__icons'>
        <a href='###' className='footer__link'>
          <ion-icon name='logo-instagram' />
        </a>
        <a href='###' className='footer__link'>
          <ion-icon name='logo-facebook' />
        </a>
        <a href='###' className='footer__link'>
          <ion-icon name='logo-youtube' />
        </a>
      </div>
    </div>
  )
}
