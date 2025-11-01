'use client'

import {
  type ChangeEvent,
  type FocusEvent,
  useActionState,
  useEffect,
  useState,
} from 'react'
import toast from 'react-hot-toast'
import SubmitButton from '@/components/btn-submit'
import { type Deal, dealSchema } from '@/utils/schemas'
import type {
  DealFormState,
  StringMap,
  StringToBooleanMap,
} from '@/utils/types'
import { convertZodErrors } from '@/utils/zod'
import { formHandlerAction } from '../_actions/form-handler'

const initialState: DealFormState = {}
const initialData: Deal = {
  name: '',
  link: '',
  couponCode: '',
  discount: 10,
}

function DealForm() {
  const [state, formAction, _isPending] = useActionState(
    formHandlerAction,
    initialState,
  )
  const [deal, setDeal] = useState<Deal>(state.data || initialData)
  const [blurs, setBlurs] = useState<StringToBooleanMap>(state.blurs || {})
  const [errors, setErrors] = useState<StringMap>(state.errors || {})

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setBlurs((prev) => ({ ...prev, [name]: true }))
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDeal((prev) => {
      const updatedData = { ...prev, [name]: value }
      const validated = dealSchema.safeParse(updatedData)

      if (validated.success) {
        setErrors({})
      } else {
        const errors = convertZodErrors(validated.error)
        setErrors(errors)
      }

      return updatedData
    })
  }

  useEffect(() => {
    if (state.successMsg) {
      toast.success(state.successMsg)
      setBlurs({})
    } else if (state.errors) {
      setBlurs(
        Object.fromEntries(Object.keys(initialData).map((key) => [key, true])),
      )
    }
    if (state.data) setDeal(state.data)
    setErrors(state.errors || {})
  }, [state])

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-y-4">
        <div>
          <label className="block " htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            aria-required
            value={deal.name}
            className="w-full p-2 rounded-md text-gray-500"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <div className="h-8">
            {blurs.name && errors?.name && (
              <small className="text-red-400">{errors.name}</small>
            )}
          </div>
        </div>
        <div>
          <label className="block " htmlFor="link">
            Link (must start with https://)
          </label>
          <input
            type="text"
            name="link"
            id="link"
            aria-required
            value={deal.link}
            className="w-full p-2 rounded-md text-gray-500"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <div className="h-8">
            {blurs.link && errors?.link && (
              <small className="text-red-400">{errors.link}</small>
            )}
          </div>
        </div>
        <div>
          <label className="block " htmlFor="couponCode">
            Coupon Code
          </label>
          <input
            type="text"
            name="couponCode"
            id="couponCode"
            aria-required
            value={deal.couponCode}
            className="w-full p-2 rounded-md text-gray-500"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <div className="h-8">
            {blurs.couponCode && errors?.couponCode && (
              <small className="text-red-400">{errors.couponCode}</small>
            )}
          </div>
        </div>
        <div>
          <label className="block " htmlFor="discount">
            Discount (%)
          </label>
          <input
            type="number"
            name="discount"
            id="discount"
            aria-required
            value={deal.discount}
            className="w-full p-2 rounded-md text-gray-500"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <div className="h-8">
            {blurs.discount && errors?.discount && (
              <small className="text-red-400">{errors.discount}</small>
            )}
          </div>
        </div>
        <SubmitButton />
      </div>
    </form>
  )
}

export default DealForm
