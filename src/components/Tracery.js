import React from 'react'

export const Tracery = ({ decor, text }) =>
  text.length ? (
    <div className='tracery'>
      <img src={decor} alt='decor' className='tracery__img' />
      <div className='tracery__text'>{text}</div>
      <img src={decor} alt='decor' className='tracery__img' />
    </div>
  ) : (
    <div className='tracery-no-text'>
      <img src={decor} alt='decor' className='tracery-no-text__img' />
    </div>
  )
