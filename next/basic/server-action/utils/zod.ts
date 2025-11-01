import type { ZodError } from 'zod'
import type { StringMap } from '@/utils/types'

export function convertZodErrors(error: ZodError): StringMap {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message
    return acc
  }, {})
}
