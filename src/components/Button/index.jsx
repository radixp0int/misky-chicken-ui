import { Link } from 'react-scroll'

const Button = ({ name, path, color = '' }) => {
  return (
    <Link activeClass="active" to={path} smooth={true}>
      {/* <a> */}
      <button type='button' className={`custom_button ${color}`}>{name}</button>
      {/* </a> */}
    </Link>
  )
}

export default Button;