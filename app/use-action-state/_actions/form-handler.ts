'use server'

import { dealSchema } from '@/utils/schemas'
import { sleep } from '@/utils/sleep'
import type { DealFormState, StringMap } from '@/utils/types'
import { convertZodErrors } from '@/utils/zod'

export async function formHandlerAction(
  prevState: DealFormState,
  formData: FormData,
): Promise<DealFormState> {
  // more time to observe
  await sleep(1000)

  const unvalidatedData: StringMap = {
    name: formData.get('name') as string,
    link: formData.get('link') as string,
    couponCode: formData.get('couponCode') as string,
    discount: formData.get('discount') as string,
  }
  const validated = dealSchema.safeParse(unvalidatedData)

  if (!validated.success) {
    return {
      errors: convertZodErrors(validated.error),
      data: unvalidatedData,
    }
  }

  return { successMsg: 'Deal added successfully!' }
}
