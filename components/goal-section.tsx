import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

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

export function GoalSection({ goalsection }: Props) {
    return (
      <div className="relative bg-charcoal p-8" style={{ backgroundColor: '#222720', padding: '30px' }}>
        <img src={goalsection.mainImage} alt="Background" className="w-full h-auto rounded-sm" />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8" style={{ padding: '4%' }}>
          <h1 className="text-5xl font-bold text-beigey w-full text-center mx-auto" style={{ maxWidth: '80%', marginBottom: '2rem' }}>{goalsection.mainText}</h1>
          <div className="mt-4" style={{ width: '200px', boxSizing: 'border-box' }}>
                <a href={goalsection.button.href} 
                    className="flex justify-center items-center py-6 text-beigey font-bold rounded-md transition-colors bg-charcoal hover:bg-white hover:text-black hover:border hover:border-black"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <span>{goalsection.button.text}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
      </div>
    );
}


