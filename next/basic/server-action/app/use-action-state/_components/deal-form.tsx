'use client'

import { useActionState, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import SubmitButton from '@/components/btn-submit'
import type { DealFormState } from '@/utils/types'
import { formHandlerAction } from '../_actions/form-handler'

const initialState: DealFormState = {}

function DealForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction, _isPending] = useActionState(
    formHandlerAction,
    initialState,
  )

  useEffect(() => {
    console.log('server state', state)
    if (state.successMsg) {
      toast.success(state.successMsg)
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form action={formAction} ref={formRef}>
      <div className="flex flex-col gap-y-4">
        <div>
          <label className="block " htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={state.data?.name}
            className="w-full p-2 rounded-md text-gray-500"
          />
          <div className="h-8">
            {state.errors?.name && (
              <small className="text-red-400">{state.errors.name}</small>
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
            required
            defaultValue={state.data?.link}
            className="w-full p-2 rounded-md text-gray-500"
          />
          <div className="h-8">
            {state.errors?.link && (
              <small className="text-red-400">{state.errors.link}</small>
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
            required
            defaultValue={state.data?.couponCode}
            className="w-full p-2 rounded-md text-gray-500"
          />
          <div className="h-8">
            {state.errors?.couponCode && (
              <small className="text-red-400">{state.errors.couponCode}</small>
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
            required
            defaultValue={state.data?.discount}
            className="w-full p-2 rounded-md text-gray-500"
          />
          <div className="h-8">
            {state.errors?.discount && (
              <small className="text-red-400">{state.errors.discount}</small>
            )}
          </div>
        </div>
        <SubmitButton />
      </div>
    </form>
  )
}

export default DealForm
