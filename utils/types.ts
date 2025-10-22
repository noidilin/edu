import type { Deal } from './schemas'

export interface DealFormState {
  errors?: StringMap
  successMsg?: string
  data?: Deal
  blurs?: StringToBooleanMap
}

// export type DealFormState<T> =
//   | { errors: StringMap; data: Partial<T> }
//   | { successMag: string; data?: T }

export interface StringMap {
  [key: string]: string
}

export interface StringToBooleanMap {
  [key: string]: boolean
}
