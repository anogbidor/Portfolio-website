import { ContactHeaderProps } from './types'

const ContactHeader = ({
  title = 'Leave a message',
  subtitle = "I'll get back to you as soon as possible",
  className = '',
}: ContactHeaderProps) => (
  <div className={`space-y-1 ${className}`}>
    <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
    <p className='text-gray-600'>{subtitle}</p>
  </div>
)

export default ContactHeader
