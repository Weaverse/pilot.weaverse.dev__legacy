import type {HydrogenThemeSchema} from '@weaverse/hydrogen';
import pkg from '../../package.json';

export let themeSchema: HydrogenThemeSchema = {
  info: {
    version: pkg.version,
    author: 'Weaverse',
    name: 'Pilot',
    authorProfilePhoto:
      'https://cdn.shopify.com/s/files/1/0838/0052/3057/files/Weaverse_logo_-_3000x_e2fa8c13-dac2-4dcb-a2c2-f7aaf7a58169.png?v=1698245759',
    documentationUrl: 'https://weaverse.io/docs',
    supportUrl: 'https://help.weaverse.io/',
  },
  inspector: [
    {
      group: 'Logo',
      inputs: [
        {
          type: 'image',
          name: 'logoData',
          label: 'Logo',
          defaultValue: {
            id: 'gid://shopify/MediaImage/34144817938616',
            altText: 'Logo',
            url: 'https://cdn.shopify.com/s/files/1/0623/5095/0584/files/Pilot_logo_b04f1938-06e5-414d-8a47-d5fcca424000.png?v=1697101908',
            width: 320,
            height: 116,
          },
        },
      ],
    },
    {
      group: 'Colors',
      inputs: [
        {
          type: 'color',
          label: 'Background',
          name: 'colorBackground',
          defaultValue: '#ffffff',
        },
        {
          type: 'color',
          label: 'Inverse background',
          name: 'colorInverseBackground',
          defaultValue: '#0f0f0f',
        },
        {
          type: 'color',
          label: 'Text',
          name: 'colorText',
          defaultValue: '#0F0F0F',
        },
        {
          type: 'color',
          label: 'Inverse text',
          name: 'colorInverseText',
          defaultValue: '#ffffff',
        },
        {
          type: 'color',
          label: 'Button',
          name: 'colorButton',
          defaultValue: '#0F0F0F',
        },
        {
          type: 'color',
          label: 'Button text',
          name: 'colorButtonText',
          defaultValue: '#FFF',
        },
        {
          type: 'color',
          label: 'Inverse button',
          name: 'colorInverseButton',
          defaultValue: '#FFF',
        },
        {
          type: 'color',
          label: 'Inverse button text',
          name: 'colorInverseButtonText',
          defaultValue: '#0F0F0F',
        },
        {
          type: 'color',
          label: 'Sale',
          name: 'colorSale',
          defaultValue: '#DE4B4B',
        },
        {
          type: 'color',
          label: 'Border',
          name: 'colorBorder',
          defaultValue: '#0F0F0F',
        },
      ],
    },
    {
      group: 'Typography',
      inputs: [
        {
          type: 'heading',
          label: 'Headings',
        },
        {
          type: 'select',
          label: 'Letter spacing',
          name: 'headingBaseSpacing',
          configs: {
            options: [
              {label: '-75', value: '-0.075em'},
              {label: '-50', value: '-0.05em'},
              {label: '-25', value: '-0.025em'},
              {label: '0', value: '0em'},
              {label: '25', value: '0.025em'},
              {label: '50', value: '0.05em'},
              {label: '75', value: '0.075em'},
              {label: '100', value: '0.1em'},
              {label: '150', value: '0.15em'},
              {label: '200', value: '0.2em'},
              {label: '250', value: '0.25em'},
            ],
          },
          defaultValue: '0.025em',
        },
        {
          type: 'range',
          label: 'Font size',
          name: 'headingBaseSize',
          configs: {
            min: 22,
            max: 60,
            step: 1,
            unit: 'px',
          },
          defaultValue: 38,
        },
        {
          type: 'range',
          label: 'Line height',
          name: 'headingBaseLineHeight',
          configs: {
            min: 0.8,
            max: 2,
            step: 0.1,
          },
          defaultValue: 1.2,
        },
        {
          type: 'heading',
          label: 'Body text',
        },
        {
          type: 'select',
          label: 'Letter spacing',
          name: 'bodyBaseSpacing',
          configs: {
            options: [
              {label: '-75', value: '-0.075em'},
              {label: '-50', value: '-0.05em'},
              {label: '-25', value: '-0.025em'},
              {label: '0', value: '0em'},
              {label: '25', value: '0.025em'},
              {label: '50', value: '0.05em'},
              {label: '75', value: '0.075em'},
              {label: '100', value: '0.1em'},
              {label: '150', value: '0.15em'},
              {label: '200', value: '0.2em'},
              {label: '250', value: '0.25em'},
            ],
          },
          defaultValue: '0.025em',
        },
        {
          type: 'range',
          label: 'Font size',
          name: 'bodyBaseSize',
          configs: {
            min: 12,
            max: 48,
            step: 1,
            unit: 'px',
          },
          defaultValue: 18,
        },
        {
          type: 'range',
          label: 'Line height',
          name: 'bodyBaseLineHeight',
          configs: {
            min: 0.8,
            max: 2,
            step: 0.1,
          },
          defaultValue: 1.2,
        },
      ],
    },
    {
      group: 'Layout',
      inputs: [
        {
          type: 'range',
          label: 'Nav height (mobile)',
          name: 'navHeightMobile',
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: 'rem',
          },
          defaultValue: 3,
        },
        {
          type: 'range',
          label: 'Nav height (tablet)',
          name: 'navHeightTablet',
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: 'rem',
          },
          defaultValue: 4,
        },
        {
          type: 'range',
          label: 'Nav height (desktop)',
          name: 'navHeightDesktop',
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: 'rem',
          },
          defaultValue: 6,
        },
      ],
    },
  ],
};
