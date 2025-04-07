export interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phoneNumber: string
  message: string
  country: string
  privacy?: boolean
}

export interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
 [key: string]: string | undefined
}

export interface InputFieldProps {
  id: string
  label: string
  name: string
  type?: string
  value: string
  required?: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error?: string
  className?: string
  'aria-invalid'?: 'true' | 'false' 
  'aria-describedby'?: string
}

export interface TextAreaFieldProps extends Omit<InputFieldProps, 'type'> {
  rows?: number
  textareaClassName?: string
  errorClassName?: string
  placeholder?: string
  disabled?: boolean
  ariaDescribedBy?: string
  'aria-invalid'?: 'true' | 'false' 
  'aria-describedby'?: string
}

export interface PhoneInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCountryChange?: (country: string) => void
  className?: string
  selectClassName?: string
  country: string
  inputClassName?: string
}

export interface CheckboxProps {
  id: string
  label: React.ReactNode
  required?: boolean
  className?: string
  name?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkboxClassName?: string
  labelClassName?: string
  linkClassName?: string
 
}

export interface SubmitButtonProps {
  isSubmitting: boolean
  label: string
  className?: string
  'aria-invalid'?: 'true' | 'false' // Add this
  'aria-describedby'?: string
}

export interface ContactHeaderProps {
  title: string
  subtitle: string
  className?: string
}

export interface SuccessMessageProps {
  title: string
  message: string
  className?: string
  iconClassName?: string
  textClassName?: string
  showIcon?: boolean
}
