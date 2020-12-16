import React from 'react'
import { useSelector } from 'react-redux'

import { Jumbotron } from '../components/Jumbotron'
import { Tracery } from '../components/Tracery'

export const GoldenFest = () => {
  const content = useSelector((state) =>
    state.initiatives.find((item) => item.id === '5')
  )

  const ornament = useSelector((state) =>
    state.decors.find((item) => item.id === '5')
  )

  return (
    <div className="section">
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
      />
      <Tracery decor={ornament.decor} text={ornament.text} />
    </div>
  )
}
