import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

type GoalSection = {
  mainImage: string
  mainText: string
  button: {
    href: string
    text: string
  }
}

type Props = {
  goalsection: GoalSection
}

export function GoalSection({ goalsection } : Props ) {
  return (
    <div className="container">
        <div className="flex justify-between items-center w-full">
            <div className='ml-10'>
                <img src={goalsection.mainImage} alt="logo" className="w-1/2 h-auto" />
            </div>
            <div>
                <ul className="flex justify-end w-full ">
                    <li className={`py-3 px-10 border-black border-solid border-l`}>
                        <a href={goalsection.button.href} className="font-sans text-right text-lg font-semibold">{goalsection.button.text}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
