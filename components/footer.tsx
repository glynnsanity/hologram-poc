import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

type Footer = {
    effectsColumn: {
        links: {
            href: string
            text: string
        }
    }
    resourcesColumn: {
        title: string
        links: {
            href: string
            text: string
        }
    }
    socialColumn: {
        title: string
        links: {
            href: string
            text: string
        }
    }
    subscriptionArea: {
        mainText: string
        button: {
            href: string
            text: string
        }
        termsText: string
    }
}

type Props = {
  footer: Footer
}

export function Footer({ footer } : Props ) {
  return (
    <div className="container">
        <div className="flex justify-between items-center w-full">
            <div className='ml-10'>
                <ul className="flex justify-end w-full ">
                    {footer.effectsColumn.links.map((link, index) => (
                      <li key={index} className={`py-3 px-10 border-black border-solid border-l`}>
                          <a href={link.href} className="font-sans text-right text-lg font-semibold">{link.text}</a>
                      </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex justify-end w-full ">
                    {footer.resourcesColumn.links.map((link, index) => (
                      <li key={index} className={`py-3 px-10 border-black border-solid border-l`}>
                          <a href={link.href} className="font-sans text-right text-lg font-semibold">{link.text}</a>
                      </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex justify-end w-full ">
                    {footer.socialColumn.links.map((link, index) => (
                      <li key={index} className={`py-3 px-10 border-black border-solid border-l`}>
                          <a href={link.href} className="font-sans text-right text-lg font-semibold">{link.text}</a>
                      </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex justify-end w-full ">
                    <li className={`py-3 px-10 border-black border-solid border-l`}>
                        <a href={footer.subscriptionArea.button.href} className="font-sans text-right text-lg font-semibold">{footer.subscriptionArea.button.text}</a>
                    </li>
                </ul>
                <p>{footer.subscriptionArea.mainText}</p>
                <p>{footer.subscriptionArea.termsText}</p>
            </div>
        </div>
    </div>
  )
}
