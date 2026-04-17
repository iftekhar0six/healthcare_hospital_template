import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  disabled = false,
  fullWidth = false,
  type = 'button',
}) => {
  const className = `button button--${variant} button--${size} ${fullWidth ? 'button--full-width' : ''}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
