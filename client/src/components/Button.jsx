import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  'primary-outline': 'border border-primary text-primary hover:bg-primary hover:text-white',
  'accent-outline': 'border border-accent text-accent hover:bg-accent hover:text-font',
  light: 'bg-bg-100 text-primary-dark hover:bg-white',
}

function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const classes = `px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
