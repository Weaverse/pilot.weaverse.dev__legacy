import {useThemeSettings} from '@weaverse/hydrogen';

let hexToPercent = (hex: string) => {
  let num = parseInt(hex, 16);
  return Math.floor((num / 255) * 100);
};

function hexToRgbString(hexColor: string = ''): string {
  hexColor = hexColor.replace('#', '');
  if (hexColor.length === 3) {
    hexColor = hexColor.replace(/(.)/g, '$1$1');
  }
  let r = parseInt(hexColor.substring(0, 2), 16) || '';
  let g = parseInt(hexColor.substring(2, 4), 16) || '';
  let b = parseInt(hexColor.substring(4, 6), 16) || '';
  let a = hexToPercent(hexColor.substring(6, 8)) || '';
  let val = `${r} ${g} ${b}`;
  return `${val}${a ? ` / ${a}%` : ''}`.trim();
}

export function GlobalStyle() {
  let settings = useThemeSettings();
  /** default settings now can be retrieve from theme schema */
  // let defaultSettings = {
  //   colorBackground: '#ffffff',
  //   colorInverseBackground: '#0f0f0f',
  //   colorText: '#0f0f0f',
  //   colorInverseText: '#ffffff',
  //   colorButton: '#0f0f0f',
  //   colorButtonText: '#ffffff',
  //   colorInverseButton: '#ffffff',
  //   colorInverseButtonText: '#0f0f0f',
  //   colorSale: '#de4b4b',
  //   colorBorder: '#0F0F0F',
  //   bodyBaseSize: 18,
  //   bodyBaseSpacing: 0,
  //   bodyBaseLineHeight: 1.5,
  //   headingBaseSize: 38,
  // };
  if (settings) {
    // settings = {...defaultSettings, ...settings};
    let {
      colorBackground,
      colorInverseBackground,
      colorText,
      colorInverseText,
      colorButton,
      colorButtonText,
      colorInverseButton,
      colorInverseButtonText,
      colorSale,
      colorBorder,
      bodyBaseSize,
      bodyBaseSpacing,
      bodyBaseLineHeight,
      headingBaseSize,
      navHeightDesktop,
      navHeightTablet,
    } = settings;
    colorBackground = hexToRgbString(colorBackground);
    colorInverseBackground = hexToRgbString(colorInverseBackground);
    colorText = hexToRgbString(colorText);
    colorInverseText = hexToRgbString(colorInverseText);
    colorButton = hexToRgbString(colorButton);
    colorButtonText = hexToRgbString(colorButtonText);
    colorInverseButton = hexToRgbString(colorInverseButton);
    colorInverseButtonText = hexToRgbString(colorInverseButtonText);
    colorSale = hexToRgbString(colorSale);
    colorBorder = hexToRgbString(colorBorder);

    return (
      <style
        id="global-theme-style"
        key="global-theme-style"
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-background: ${colorBackground};
              --color-inverse-background: ${colorInverseBackground};
              --color-text: ${colorText};
              --color-inverse-text: ${colorInverseText};
              --color-button: ${colorButton};
              --color-button-text: ${colorButtonText};
              --color-inverse-button: ${colorInverseButton};
              --color-inverse-button-text: ${colorInverseButtonText};
              --color-sale: ${colorSale};
              --color-border: ${colorBorder};

              --body-base-size: ${bodyBaseSize}px;
              --body-base-spacing: ${bodyBaseSpacing}px;
              --body-base-line-height: ${bodyBaseLineHeight};
              --heading-base-size: ${headingBaseSize}px;
              --height-nav: ${settings.navHeightMobile}rem;
            }
            body, button, input, select, textarea {
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              font-size: calc(var(--body-base-size)*0.92);
              letter-spacing: var(--body-base-spacing);
              line-height: var(--body-base-line-height);
              text-rendering: optimizeSpeed;
            }

            /* Mobile sizes */
            h1, .h1 {
              font-size: calc(var(--heading-base-size) * 0.85);
            }

            h2, .h2 {
              font-size: calc(var(--heading-base-size) * 0.73);
            }

            h3, .h3 {
              font-size: calc(var(--heading-base-size) * 0.62);
            }

            /* Desktop sizes */
            @media (min-width: 768px) {
              h1, .h1 {
                font-size: var(--heading-base-size);
              }

              h2, .h2 {
                font-size: calc(var(--heading-base-size) * 0.85);
              }

              h3, .h3 {
                font-size: calc(var(--heading-base-size) * 0.65);
              }
            }
            @media (min-width: 32em) {
              body {
                --height-nav: ${navHeightTablet}rem;
              }
            }
            @media (min-width: 48em) {
              body {
                --height-nav: ${navHeightDesktop}rem;
              }
            }
          `,
        }}
      />
    );
  }
  return null;
}
