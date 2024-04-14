import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  theme: {
    hljs: {
        theme: 'night-owl',
    },
    extend: {
        colors: {
        amber: colors.amber,
        black: colors.black,
        blue: colors.blue,
        blueGray: colors.slate,
        coolGray: colors.gray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        // gray: colors.gray,
        green: colors.green,
        indigo: colors.indigo,
        lightBlue: colors.sky,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        sky: colors.sky,
        teal: colors.teal,
        trueGray: colors.neutral,
        violet: colors.violet,
        warmGray: colors.stone,
        white: colors.white,
        yellow: colors.yellow,
        },
        typography: (theme: (arg0: string) => any) => ({
            DEFAULT: {
                css: {
                    maxWidth: '80ch', // add required value here
                    img: {
                        maxHeight: "500px"
                    },
                }
            },
            dark: {
                css: [
                {
                    color: theme("colors.gray.400"),
                    '[class~="lead"]': {
                    color: theme("colors.gray.300"),
                    },
                    a: {
                        color: theme("colors.white"),
                    },
                    strong: {
                        color: theme("colors.white"),
                    },
                    "ol > li::before": {
                        color: theme("colors.gray.400"),
                    },
                    "ul > li::before": {
                        backgroundColor: theme("colors.gray.600"),
                    },
                    hr: {
                        borderColor: theme("colors.gray.200"),
                    },
                    blockquote: {
                        color: theme("colors.gray.200"),
                        borderLeftColor: theme("colors.gray.600"),
                    },
                    h1: {
                        color: theme("colors.white"),
                    },
                    h2: {
                        color: theme("colors.white"),
                    },
                    h3: {
                        color: theme("colors.white"),
                    },
                    h4: {
                        color: theme("colors.white"),
                    },
                    th: {
                        color: theme("colors.white"),
                    },
                    "figure figcaption": {
                        color: theme("colors.gray.400"),
                    },
                    code: {
                        color: theme("colors.white"),
                    },
                    "a code": {
                        color: theme("colors.white"),
                    },
                    pre: {
                        color: theme("colors.gray.200"),
                        backgroundColor: theme("colors.gray.800"),
                    },
                    thead: {
                        color: theme("colors.white"),
                        borderBottomColor: theme("colors.gray.400"),
                    },
                    "tbody tr": {
                        borderBottomColor: theme("colors.gray.600"),
                    },
                },
            ],
         },
        }
      ),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
        typography: ["dark"],
    },
  },
}
export default config
