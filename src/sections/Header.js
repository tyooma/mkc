import React from 'react'
import { useSelector } from 'react-redux'

import mainLogo from '../assets/main_logo.svg'

import { Jumbotron } from '../components/Jumbotron'
import { Nav } from '../components/Nav'
import { Tracery } from '../components/Tracery'

export const Header = () => {
  const content = useSelector((state) =>
    state.initiatives.find((item) => item.section === 'Header')
  )

  const ornament = useSelector((state) =>
    state.decors.find((item) => item.id === '1')
  )

  return (
    <div className='header'>
      <img src={mainLogo} alt='logo' className='header__logo' />
      <Nav />
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
      />
      <div className='header__videos'>
        <iframe
          src='https://www.youtube.com/embed/bkzXt7swcfE'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='first-video'
          className='header__video'
        />
        <iframe
          src='https://www.youtube.com/embed/lrNKjRbLUF0'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='second-video'
          className='header__video'
        />
      </div>
      <Tracery decor={ornament.decor} text={ornament.text} />
    </div>
  )
}
