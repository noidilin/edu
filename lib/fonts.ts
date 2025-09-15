import { Fira_Code, Fraunces, Merriweather_Sans, Modak } from 'next/font/google'

const merriweatherSans = Merriweather_Sans({
  variable: '--font-merriweather-sans',
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

export { merriweatherSans, fraunces, firaCode, modak }
