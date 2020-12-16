import React from 'react'
import { Btn } from './Btn'

export const Jumbotron = ({
  title,
  desc,
  background,
  btn,
  titleColor,
  descColor
}) => (
  <div className='jumbotron' style={{ backgroundColor: background }}>
    <div className='jumbotron__title' style={{ color: titleColor }}>
      {title}
    </div>
    <div className='jumbotron__desc' style={{ color: descColor }}>
      {desc}
    </div>
    {btn.text ? <Btn btn={btn} /> : ''}
  </div>
)
