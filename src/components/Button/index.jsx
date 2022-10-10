
const Button = ({ name, path, color = '' }) => {
  return (
    <a href={path}>
      <button type='button' className={`custom_button ${color}`}>{name}</button>
    </a>
  )
}

export default Button;