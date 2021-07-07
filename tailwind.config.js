module.exports = {
     mode: 'jit',
     purge: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
     ],
     darkMode: false, // or 'media' or 'class'
     theme: {
          fontFamily: {
               sans: ['ui-sans-serif', 'system-ui'],
               serif: ['ui-serif', 'Georgia'],
               mono: ['ui-monospace', 'SFMono-Regular'],
               roboto: ['Roboto'],
          },
          screens: {
               sm: '640px',
               // => @media (min-width: 640px) { ... }

               md: '768px',
               // => @media (min-width: 768px) { ... }

               lg: '1024px',
               // => @media (min-width: 1024px) { ... }

               xl: '1280px',
               // => @media (min-width: 1280px) { ... }

               '2xl': '1536px',
               // => @media (min-width: 1536px) { ... }
          },
          extend: {
               backgroundImage: (theme) => ({
                    'footer-img': "url('/assets/bg_footer.png')",
               }),
               colors: {
                    primary: '#FF8303',
                    secondary: '#A35709',
                    white: '#F0E3CA',
                    dark: '#2F2E2A',
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
}
