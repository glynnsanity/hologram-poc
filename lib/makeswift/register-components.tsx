import {
  Combobox,
  Link,
  List,
  Number,
  Select,
  Shape,
  Slot,
  Style,
  TextInput,
  Image,
} from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import {
  ProductList,
  ProductImages,
  Header,
  ProductAddToCartButton,
  ProductBreadcrumbs,
  ProductDescription,
  ProductName,
  LocaleProvider,
  ProductPrice,
  LocaleSwitcher,
  NewNavigation,
  Hero,
  Footer,
  GoalSection,
  EffectsSection,
} from 'components'
import { Category } from 'lib/bigcommerce'
import { Locale } from 'lib/locale'
import dynamic from 'next/dynamic'
import React from 'react'

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('components/new-navigation').then(({ NewNavigation }) => NewNavigation)))
  ),
  {
    type: 'new-navigation',
    label: 'BigCommerce / New Navigation',
    props: {
      navigation: Shape({
        type: {
          className: Style(),
          logoImage: Image({ label: 'Logo Image' }),
          links: List({
            type: Shape({
              type: {
                href: TextInput({ label: 'Link' }),
                text: TextInput({ label: 'Text' }),
              },
            }),
            label: 'Links',
            getItemLabel: (item: { text?: string }) => item?.text ?? '',
          }),
        },
      }),
    },
  }
)

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('components/hero').then(({ Hero }) => Hero)))
  ),
  {
    type: 'hero',
    label: 'BigCommerce / Hero',
    props: {
      hero: Shape({
        type: {
          className: Style(),
          mainImage: Image({ label: 'Main Image' }),
          button: Shape({
            type: {
              href: TextInput({ label: 'Link' }),
              text: TextInput({ label: 'Text' }),
            },
          }),
        }
      }),
    },
  }
)

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('components/goal-section').then(({ GoalSection }) => GoalSection)))
  ),
  {
    type: 'goal-section',
    label: 'BigCommerce / Goal Section',
    props: {
      goalsection: Shape({
        type: {
          className: Style(),
          mainImage: Image({ label: 'Main Image' }),
          mainText: TextInput({ label: 'Main Text' }),
          button: Shape({
            type: {
              href: TextInput({ label: 'Link' }),
              text: TextInput({ label: 'Text' }),
            },
          }),
        },
      }),
    },
  }
)

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('components/effects-section').then(({ EffectsSection }) => EffectsSection)))
  ),
  {
    type: 'effects-section',
    label: 'BigCommerce / Effects Section',
    props: {
      className: Style(),
      categoryTitle: TextInput({ label: 'Category Title' }),
      products: List({
        type: Shape({
          type: {
            productImage: Image({ label: 'Product Image' }),
            href: TextInput({ label: 'Link' }),
            name: TextInput({ label: 'Name' }),
            description: TextInput({ label: 'Description' }),
          },
        }),
        label: 'Products',
        getItemLabel: (item: { text?: string }) => item?.text ?? '',
      }),
    }
  }
)

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('components/footer').then(({ Footer }) => Footer)))
  ),
  {
    type: 'footer',
    label: 'BigCommerce / Footer',
    props: {
      footer: Shape({
        type: {
          className: Style(),
          effectsColumn: Shape({
            type: {
              title: TextInput({ label: 'First Column Title' }),
              links: List({
                type: Shape({
                  type: {
                    href: TextInput({ label: 'First Column Link' }),
                    text: TextInput({ label: 'First Column Text' }),
                  },
                }),
                label: 'First Column Links',
                getItemLabel: (item: { text?: string }) => item?.text ?? '',
              }),
            },
          }),
          resourcesColumn: Shape({
            type: {
              title: TextInput({ label: 'Second Column Title' }),
              links: List({
                type: Shape({
                  type: {
                    href: TextInput({ label: 'Second Column Link' }),
                    text: TextInput({ label: 'Second Column Text' }),
                  },
                }),
                label: 'Second Column Links',
                getItemLabel: (item: { text?: string }) => item?.text ?? '',
              }),
            },
          }),
          socialColumn: Shape({
            type: {
              title: TextInput({ label: 'Third Column Title' }),
              links: List({
                type: Shape({
                  type: {
                    href: TextInput({ label: 'Third Column Link' }),
                    text: TextInput({ label: 'Third Column Text' }),
                  },
                }),
                label: 'Third Column Links',
                getItemLabel: (item: { text?: string }) => item?.text ?? '',
              }),
            },
          }),
          subscriptionArea: Shape({
            type: {
              mainText: TextInput({ label: 'Subscription Area Text' }),
              button: Shape({
                type: {
                  href: TextInput({ label: 'Subscription Link' }),
                  text: TextInput({ label: 'Subscription Button Text' }),
                },
              }),
              termsText: TextInput({ label: 'Subscription Terms Text' }),
            },
          }),
        },
      }),
    },
  }
)

ReactRuntime.registerComponent(ProductList, {
  type: 'product-list',
  label: 'Product list',
  props: {
    className: Style({ properties: Style.All }),
    categoryEntityId: Combobox({
      async getOptions() {
        return fetch(`/api/categories`)
          .then(r => r.json())
          .then((categories: Category[]) =>
            categories.map(category => ({
              id: category.entityId.toString(),
              label: category.name,
              value: category.entityId.toString(),
            })),
          )
      },
      label: 'Category',
    }),
    count: Number({
      label: 'Count',
      defaultValue: 4,
      max: 8,
      min: 1,
      labelOrientation: 'horizontal',
      step: 1,
    }),
  },
})

ReactRuntime.registerComponent(ProductImages, {
  type: 'product-images',
  label: 'Product images',
  props: {
    className: Style({ properties: Style.All }),
  },
})

ReactRuntime.registerComponent(ProductPrice, {
  type: 'product-price',
  label: 'Product price',
  props: {
    className: Style({ properties: Style.All }),
  },
})

ReactRuntime.registerComponent(ProductBreadcrumbs, {
  type: 'product-breadcrumbs',
  label: 'Product breadcrumbs',
  props: {
    className: Style({ properties: [Style.Margin, Style.Width] }),
  },
})

ReactRuntime.registerComponent(ProductName, {
  type: 'product-name',
  label: 'Product name',
  props: {
    className: Style({ properties: Style.All }),
  },
})

ReactRuntime.registerComponent(ProductDescription, {
  type: 'product-description',
  label: 'Product description',
  props: {
    className: Style({ properties: Style.All }),
  },
})

ReactRuntime.registerComponent(Header, {
  type: 'header',
  label: 'Header',
  props: {
    className: Style({ properties: Style.All }),
    links: List({
      type: Shape({
        type: {
          link: Link(),
          text: TextInput({ label: 'Text' }),
        },
      }),
      label: 'Links',
      getItemLabel: (item: { text?: string }) => item?.text ?? '',
    }),
  },
})

ReactRuntime.registerComponent(ProductAddToCartButton, {
  type: 'add-to-cart-button',
  label: 'Add to cart button',
  props: {
    className: Style({ properties: [Style.Margin] }),
  },
})

ReactRuntime.registerComponent(LocaleProvider, {
  type: 'locale-provider',
  label: 'Locale provider',
  props: {
    className: Style(),
    previewLocale: Select({
      options: Object.keys(Locale).map(key => ({
        value: Locale[key as keyof typeof Locale],
        label: key,
      })),
    }),
    english: Slot(),
    spanish: Slot(),
  },
})

ReactRuntime.registerComponent(LocaleSwitcher, {
  type: 'locale-switcher',
  label: 'Locale switcher',
  props: {
    className: Style(),
    previewLocale: Select({
      options: Object.keys(Locale).map(key => ({
        value: Locale[key as keyof typeof Locale],
        label: key,
      })),
    }),
  },
})
