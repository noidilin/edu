import { Fira_Code, Fraunces, Merriweather, Modak } from 'next/font/google'

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

const modak = Modak({
  variable: '--font-modak',
  subsets: ['latin'],
  weight: '400',
})

export { merriweather, fraunces, firaCode, modak }
