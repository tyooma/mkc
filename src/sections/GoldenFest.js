import React from 'react'
import { useSelector } from 'react-redux'

import { Jumbotron } from '../components/Jumbotron'

export const GoldenFest = () => {
  const content = useSelector((state) =>
    state.initiatives.find((item) => item.id === '5')
  )

  return (
    <div className='section'>
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        moreBtn={content.moreBtn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
      />
    </div>
  )
}
