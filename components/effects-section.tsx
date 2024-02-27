import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

type EffectsSection = {
  logoImage: string
  links: {
    href: string
    text: string
  }
  buttonText: string
}

type Props = {
  effectssection: EffectsSection
}

export function EffectsSection({ effectssection } : Props ) {
  const SHOP_TEXT = 'SHOP';
  return (
    <div className="container max-w-screen-2xl border-black border-solid border-b">
      <div className="flex justify-between items-center w-full">
          <div className='ml-10'>
              <img src={effectssection.logoImage} alt="logo" className="w-1/2 h-auto" />
          </div>
          <div>
              <ul className="flex justify-end w-full ">
                  {effectssection.links.map((link, index) => (
                    <li key={index} className={`py-3 px-10 border-black border-solid border-l ${link.text === 'SHOP' ? 'bg-oldyellow' : ''}`}>
                        <a href={link.href} className="font-sans text-right text-lg font-semibold">{link.text}</a>
                    </li>
                  ))}
              </ul>
          </div>
      </div>
    </div>

  )
}