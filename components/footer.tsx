import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

type Footer = {
  effectsColumn: {
    title?: string;
    links: { href?: string; text?: string }[];
  };
  resourcesColumn: {
    title?: string;
    links: { href?: string; text?: string }[];
  };
  socialColumn: {
    title?: string;
    links: { href?: string; text?: string }[];
  };
  subscriptionArea: {
    mainText?: string;
    button: { href?: string; text?: string };
    termsText?: string;
  };
};

type Props = {
  footer: Footer;
};

export function Footer({ footer }: Props) {
    const mainText = footer.subscriptionArea.mainText; // Assuming this is your text variable
    const wordsToBold = "Subscribe to our mailing list"; // The word you want to bold

    // Split the text into parts, with the word to bold as a delimiter
    const parts = mainText.split(new RegExp(`(${wordsToBold})`, 'gi'));
  return (
    <div className="flex w-full border border-y-charcoal">
      <div className="flex-grow bg-beigey p-6 border border-r-charcoal pb-12" style={{ flexBasis: '70%' }}>
        <div className="flex justify-between">
          {[footer.effectsColumn, footer.resourcesColumn, footer.socialColumn].map((column, index) => (
            <div key={index} className="w-full px-4">
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.href} className="text-md text-charcoal hover:text-gray-900">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow bg-oldyellow pb-12" style={{ flexBasis: '30%' }}>
        <div className="flex flex-col items-center justify-center p-8 space-y-6">
            <p className="text-md font-light">
                {parts.map((part, index) =>
                // Check if the part is the word to bold
                part.toLowerCase() === wordsToBold.toLowerCase() ? (
                    <strong key={index} className="font-bold">{part}</strong> // Bold the specific word
                ) : (
                    part // Render the rest of the text normally
                )
                )}
            </p>
            <form className="w-full max-w-sm flex flex-col items-start space-y-6">
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-charcoal rounded-md shadow-sm bg-transparent" />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="appearance-none h-4 w-4 border border-charcoal rounded bg-oldyellow checked:bg-charcoal focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                <label htmlFor="terms" className="text-md text-charcoal flex items-center cursor-pointer">
                  {footer.subscriptionArea.termsText}
                </label>
              </div>
              <div className="text-center" style={{ width: '100%', boxSizing: 'border-box' }}>
                <button type="submit" 
                  className="w-full py-4 text-beigey font-bold rounded-md transition-colors bg-charcoal hover:bg-white hover:text-black hover:border hover:border-black flex justify-center items-center"
                  style={{ display: 'flex', justifyContent: 'center' }}>
                  {footer.subscriptionArea.button.text}
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
