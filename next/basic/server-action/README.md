## Summary

1. Server Action: Basic foundation, manual everything
2. `useActionState`: Built-in state management, form persistence
3. `useActionState` + Client Validation: Real-time feedback, better UX, blur tracking
4. React Hook Form: Production-ready, minimal code, best performance, single validation source

> [!TIP] Recommendation:
> Use React Hook Form for production apps with multiple forms. Use useActionState + client validation if you want to avoid dependencies and have full control.

> [!CAUTION] Types in this project
> The types setup should be improved.

---

## Form Implementation Comparison

### 1. Server Action (Basic)

`app/server-action/`

How it works:

- Client manually calls server action via `async` function
- Manual state management with `useState` for errors
- Manual form reset with `useRef`

Pros:

- Simple, straightforward implementation
- Full control over form handling logic
- Minimal React dependencies

Cons:

- Manual state management (errors, loading, success)
- No built-in form data persistence on errors
- Manual form reset handling
- No pending state from `useFormStatus` utilized properly
- More boilerplate code

---

### 2. `useActionState`

`app/use-action-state/`

What improved:

• Uses React 19's `useActionState` hook
• Server action now receives `prevState` parameter
• Returns `unvalidated` data back to client on error (line 26)
• Preserves form values using `defaultValue={state.data?.name}` (lines 39, 57, 75, 93)

Pros:

• Built-in state management for server responses
• Automatic form data persistence on validation errors
• Less boilerplate than manual approach
• Better UX - users don't lose their input on errors

Cons:

• Still no client-side validation (must wait for server round-trip)
• Uses `useEffect` for side effects (toast notifications)
• Manual form reset still needed

---

### 3. `useActionState` + Client Validation

`app/use-action-state-with-client-validation/`

What improved:

• Real-time client validation with `onChange` handler (lines 43-58)
• Blur tracking to only show errors after user interaction (lines 38-41)
• Immediate feedback without server round-trip
• Server returns blurs object to show all errors on submit failure (lines 27-29)
• Controlled inputs with value={deal.name} instead of `defaultValue`

Pros:

• Best UX - instant validation feedback
• Shows errors only after user touches field (progressive disclosure)
• Prevents unnecessary server requests for obvious validation errors
• Reduces server load

Cons:

• More complex state management (deal, blurs, errors)
• Validation logic duplicated (client + server)
• More verbose component code (3 `useState` hooks + `useEffect`)
• Controlled components can have performance implications

---

### 4. React Hook Form

`app/react-hook-form/`

What improved:

• Uses battle-tested react-hook-form library
• `zodResolver` integrates Zod schema directly (line 16)
• Single validation source - no duplication
• Server action simplified - receives typed Deal object, not `FormData` (line 8)
• Built-in `isSubmitting` state (line 14)
• Built-in mode: `'onBlur'` validation (line 18)
• Auto-reset with `reset()` function

Pros:

• Least code in component (~40 lines vs ~100+ lines)
• Best performance (uncontrolled inputs, optimized re-renders)
• Single source of truth for validation (Zod schema)
• Server action receives clean typed data, not `FormData`
• Rich ecosystem and features (field arrays, nested objects, etc.)
• Better TypeScript integration
• Built-in accessibility features

Cons:

• External dependency (~40KB gzipped)
• Requires learning react-hook-form API
• Less explicit control over form behavior
• Overkill for very simple forms
