import React from 'react'
import { useSelector } from 'react-redux'

export const Curators = () => {
  const curators = useSelector((state) => state.curators)
  const initiativeLogos = useSelector((state) => state.initiativeLogos)

  return (
    <>
      <div className='curators'>
        {curators.map((curator) => (
          <div key={curator.id} className='curator'>
            <img src={curator.img} alt='curator' className='curator__img' />
            <div className='curator__name'>{curator.name}</div>
            <div className='curator__position'>{curator.position}</div>
          </div>
        ))}
      </div>
      <div className='initiative-logos'>
        {initiativeLogos.map((logo) => (
          <img src={logo.img} alt='logo' className='initiative-logos__item' />
        ))}
      </div>
    </>
  )
}
