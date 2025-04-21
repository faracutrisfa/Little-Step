import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  let variantClass = ''

  if (variant === 'primary') {
    variantClass = 'bg-secondary-50 text-white shadow-xl hover:bg-secondary-70'
  } else if (variant === 'secondary') {
    variantClass = 'border-2 border-secondary-50 text-secondary-50 shadow-xl'
  }

  const baseClass = 'rounded-3xl px-7 lg:px-8 py-2 font-extrabold transition duration-200 hover:scale-105'

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button