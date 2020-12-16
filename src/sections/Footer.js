import React from 'react'
import { useSelector } from 'react-redux'

export const Footer = () => {
  const contacts = useSelector((state) => state.contacts)

  return (
    <div className='footer'>
      <div className='footer__phone'>{contacts.phone}</div>
      <div className='footer__email'>{contacts.email}</div>
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
