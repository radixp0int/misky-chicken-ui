import { Link } from 'react-scroll'

const Button = ({ name, path }) => {
  return (
    <Link to={path}>
      {/* <a> */}
      <button type='button' className='custom_button'>{name}</button>
      {/* </a> */}
    </Link>
  )
}

export default Button;