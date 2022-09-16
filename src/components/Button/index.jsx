import { Link } from 'react-scroll'

const Button = ({ name, path, color = '' }) => {
  return (
    <Link to={path}>
      {/* <a> */}
      <button type='button' className={`custom_button ${color}`}>{name}</button>
      {/* </a> */}
    </Link>
  )
}

export default Button;