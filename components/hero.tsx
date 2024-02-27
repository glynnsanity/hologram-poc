import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

type Hero = {
  mainImage: string
  button: {
    href: string
    text: string
  }
}

type Props = {
  hero: Hero
}

export function Hero({ hero } : Props ) {
  return (
    <div className="container">
        <div className="flex justify-between items-center w-full">
            <div className='ml-10'>
                <img src={hero.mainImage} alt="logo" className="w-1/2 h-auto" />
            </div>
            <div>
                <ul className="flex justify-end w-full ">
                    <li className={`py-3 px-10 border-black border-solid border-l`}>
                        <a href={hero.button.href} className="font-sans text-right text-lg font-semibold">{hero.button.text}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
