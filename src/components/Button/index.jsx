
const Button = ({ name, href, color = '' }) => {
  return (
    <a href={href}>
      <button type='button' className={`custom_button ${color}`}>{name}</button>
    </a>
  )
}

export default Button;