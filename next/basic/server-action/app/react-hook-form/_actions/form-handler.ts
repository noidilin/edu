'use server'

import { type Deal, dealSchema } from '@/utils/schemas'
import { sleep } from '@/utils/sleep'
import type { DealFormState } from '@/utils/types'
import { convertZodErrors } from '@/utils/zod'

export async function formHandlerAction(deal: Deal): Promise<DealFormState> {
  // more time to observe
  await sleep(1000)

  const validated = dealSchema.safeParse(deal)
  if (!validated.success) return convertZodErrors(validated.error)

  return { successMsg: 'Deal added successfully!' }
}
