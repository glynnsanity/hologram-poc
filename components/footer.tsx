import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

type Footer = {
  effectsColumn: {
    title: string;
    links: { href: string; text: string }[];
  };
  resourcesColumn: {
    title: string;
    links: { href: string; text: string }[];
  };
  socialColumn: {
    title: string;
    links: { href: string; text: string }[];
  };
  subscriptionArea: {
    mainText: string;
    button: { href: string; text: string };
    termsText: string;
  };
};

type Props = {
  footer: Footer;
};

export function Footer({ footer }: Props) {
  return (
    <div className="flex w-full">
      <div className="flex-grow" style={{ flexBasis: '70%' }}>
        <div className="flex justify-between">
          {[footer.effectsColumn, footer.resourcesColumn, footer.socialColumn].map((column, index) => (
            <div key={index} className="w-full px-4">
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.href} className="text-md text-gray-600 hover:text-gray-900">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow" style={{ flexBasis: '30%' }}>
        <div className="flex flex-col items-center justify-center p-8 space-y-6">
          <p className="text-lg font-semibold">{footer.subscriptionArea.mainText}</p>
          <form className="w-full max-w-sm flex flex-col items-center space-y-3">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="terms" className="text-sm text-gray-600">{footer.subscriptionArea.termsText}</label>
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">{footer.subscriptionArea.button.text}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
