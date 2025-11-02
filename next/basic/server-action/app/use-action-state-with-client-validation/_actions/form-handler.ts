'use server'

import { type Deal, dealSchema } from '@/utils/schemas'
import { sleep } from '@/utils/sleep'
import type { DealFormState } from '@/utils/types'
import { convertZodErrors } from '@/utils/zod'

export async function formHandlerAction(
  _prevState: DealFormState,
  formData: FormData,
): Promise<DealFormState> {
  // more time to observe
  await sleep(1000)

  const unvalidatedData = {
    name: formData.get('name'),
    link: formData.get('link'),
    couponCode: formData.get('couponCode'),
    discount: formData.get('discount'),
  }
  const validated = dealSchema.safeParse(unvalidatedData)

  if (!validated.success) {
    return {
      errors: convertZodErrors(validated.error),
      data: unvalidatedData as unknown as Deal,
      blurs: Object.fromEntries(
        Object.keys(unvalidatedData).map((key) => [key, true]),
      ),
    }
  } else {
    return {
      successMsg: 'Deal added successfully!',
      data: { name: '', link: '', couponCode: '', discount: 10 },
    }
  }
}
