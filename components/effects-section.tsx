import React, { Ref, forwardRef } from 'react'
import Image from 'next/image'

type ProductCard = {
  productImage: string;
  href: string;
  name: string;
  description: string;
};

type EffectsSectionProps = {
  categoryTitle: string;
  products: ProductCard[];
};

export function EffectsSection({ categoryTitle, products }: EffectsSectionProps) {
    return (
      <div className="w-full px-8 pb-12 bg-greyish">
        <h2 className="text-left text-2xl font-semibold mb-4 pt-12 pb-4 text-charcoal">{categoryTitle}</h2>
        <div className="grid grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border border-charcoal">
              <a href={product.href} className="block">
                <img src={product.productImage} alt={product.name} className="w-full h-auto" />
                <div className="p-6 bg-beigey border-t border-charcoal">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-redsy text-xl">{product.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
}
